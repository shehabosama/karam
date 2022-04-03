import React from 'react';
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
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect, } from 'react-redux';
import { GET_CAUSES_DATA } from '../../constants';
import { getCausesData } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
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
        <View style={{ flexDirection: 'row' }}>
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
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CauseScreen', { id: item.id })}>
        <View style={styles.renderItem}>
          <CardView
            style={{ flex: 1, flexDirection: 'row', borderWidth: 2, padding: 10 }}
            cardElevation={6}
            cardMaxElevation={6}
            cornerRadius={10}>
            <Image
              source={{ uri: `${item.avatarImage}` }}
              style={{ height: 44, width: 35, margin: 10 }}
            />
            <View style={{ flexDirection: 'column', flex: 1, marginTop: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', marginVertical: 5 }}>{item.name}</Text>
              <Text style={{ color: Colors.placeHolder }}>{item.description}{item.id}</Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 10, marginHorizontal: 5 }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>20</Text>
              <Text style={{ color: Colors.placeHolder }}>Casee</Text>
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
        avatarImage: `http://192.168.1.7/karam/public/storage/${v.image}`,
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
      <View style={{ flexDirection: 'row' }}>
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

          <TouchableOpacity onPress={() => this.props.navigation.navigate('searchCases')}>
            <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
          </TouchableOpacity>

        </CardView>
      </View>
    );
  };
  render() {
    return (
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