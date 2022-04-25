import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ToastAndroid,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CauseCard from '../../component/CauseCard';
import { Colors, IMAGES_URL } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect, } from 'react-redux';
import { GET_CAUSES_DATA } from '../../constants';
import { getCausesData } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import gloable from '../../styles/gloable';
class Causes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      causes: [],
      isFetching: false,
      loading: false,
      initial: true,
    };

    this.onEndReachedCalledDuringMomentum = false;
    this.endReached = false;
    this.page = 1;
  }

  componentDidMount() {
    this._getCauses(false);
  }

  componentWillUnmount() { }

  //Flatlist
  async onRefresh() {
    this.onEndReachedCalledDuringMomentum = false;
    this.endReached = false;
    this.page = 1;
    this.setState({ isFetching: true });
    await this._getCauses();
    this.setState({ isFetching: false });
  }

  onScrollHandler = async () => {
    if (this.endReached) {
      return;
    }
    if (this.onEndReachedCalledDuringMomentum) {
      return;
    }
    this.onEndReachedCalledDuringMomentum = true;
    this.page = this.page + 1;
    this.setState({ loading: true });
    await this._getCauses(false);
    this.setState({ loading: false });
  };

  onMomentumScrollBegin = () => {
    this.onEndReachedCalledDuringMomentum = false;
  };
  getHeaderView = () => {
    return (
      <>
        <Text style={styles.Uppertext}>Causes</Text>
        <View style={{ flexDirection: 'row' , }}>
          <CardView
            style={{ flex: 1, flexDirection: 'row', borderWidth: 2 }}
            cardElevation={6}
            cardMaxElevation={6}
            cornerRadius={50}
          >
            <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon} onPress={() => { this.props.navigation.navigate('SearchCauses') }} />
            <TextInput placeholder="Search cases , causes & providers" style={
              {
                flex: 1,
                // borderBottomColor:Colors.placeHolder,
              }
            } />
            <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
          </CardView>
        </View>
      </>

    );
  }

  renderHeader = () => {
    return (
      <Text style={styles.renderHeader}></Text>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <ActivityIndicator
        color="#128811"
        style={styles.activityIndicator}
      />
    );
  };
   
  renderItem = ({ item, index }) => {
    
    return (
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('CauseScreen', { id: item.id })}>
        <View style={styles.renderItem}>
          <CardView
            // style={{ flex: 1, flexDirection: 'row', borderWidth: 2, padding: 10 }}
            // cardElevation={6}
            // cardMaxElevation={6}
            style={styles.ItemCard}
            cornerRadius={15}>
            <Image
              source={{ uri: `${item.avatarImage}` }}
              style={{  width: 35 , margin: 10 , marginTop:20 , marginStart:20 }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: 'column', flex: 1, marginTop: 10 , marginStart:5 }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', marginVertical: 5 }}>{item.name}</Text>
              <Text style={{ color: Colors.placeHolder  , fontSize:14}}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 10, marginEnd: 20 ,  }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center',marginTop:10 }}>{item.countOfCases}</Text>
              <Text style={{ color: Colors.blackText  , fontSize:13 }}>Cases</Text>
            </View>
          </CardView>
        </View>
      </TouchableOpacity>
    );
  };

  _getCausesApi = async () => {
    //API is too fast, adding timeout to visualize loader
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    currentUser = await AsyncStorageProvider.getItem('currentUser');
    if (currentUser) {
      const json = JSON.parse(currentUser);
      await this.props.getCausesData(json.access_token, this.page)
    }

  };

  _getCauses = async () => {
    await this._getCausesApi();
    if (this.props.data !== null && this.props.data) {
      this.updateUI(this.props.data.data);
    }
  };
  updateUI = (data) => {
    let causes = data.map((v) => {
      return {
        id: v.id.toString(),
        name: `${v.name}`,
        description: v.description,
        avatarImage: `${IMAGES_URL}${v.image}`,
        countOfCases: v.cases_count
      };
    });

    if (this.page > 1 && causes.length < 1) {
      this.endReached = true;
    }

    if (this.page > 1) {
      causes = [...this.state.causes, ...causes];
    }

    if (this.page == 0) {
      causes = [...causes];
    }

    this.setState({ causes: causes, initial: false });
  };
  SearchInputForm = () => {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10 }} onPress={() => this.props.navigation.navigate('SearchCauses')}>
        <CardView
          style={styles.card}
          cornerRadius={50}
        >
          <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon} />
          <Text style={
            {
              marginTop: 10,
              flex: 1,
              color: Colors.placeHolder
              // borderBottomColor:Colors.placeHolder,
            }
          } >"Search cases , causes & providers"</Text>
          <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
        </CardView>
      </TouchableOpacity>

    );
  };
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={styles.container}>
          <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.safeAreaViewSubContainer}>
              {/* {this.state.initial && <LoadingPlaceholder />} */}
              <Text style={styles.Uppertext}>Causes</Text>
              <this.SearchInputForm />

              {!this.state.initial &&
                (!this.state.causes || this.state.causes.length < 1) && (
                  <Text>{'No Causes found.'}</Text>
                )}

              {this.state.initial && <ActivityIndicator animating style={{ flex: 1 }} size={40} />}
              {!this.state.initial &&
                this.state.causes &&
                this.state.causes.length > 0 && (
                  <FlatList
                  style={{marginTop:10}}
                    data={this.state.causes}
                    renderItem={this.renderItem}
                    onRefresh={() => this.onRefresh(false)}
                    refreshing={this.state.isFetching}
                    onEndReached={this.onScrollHandler}
                    onEndReachedThreshold={0.7}
                    onMomentumScrollBegin={this.onMomentumScrollBegin}
                    ListFooterComponent={this.renderFooter}
                    ListHeaderComponent={this.renderHeader}
                  />
                )}
            </View>
          </SafeAreaView>
        </View>
      </View>

    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer.data,
  error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
  getCausesData: bindActionCreators(getCausesData, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Causes)