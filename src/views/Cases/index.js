import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CauseCard from '../../component/CauseCard';
import { Colors, IMAGES_URL } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect, } from 'react-redux';
import { GET_CAUSES_DATA } from '../../constants';
import { getCasesData, getCausesData } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import CasesCard from '../../component/CasesCard';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
class Cases extends React.Component {
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
        <Text style={styles.Uppertext}>Cases</Text>
        <View style={{ flexDirection: 'row' }}>
          <CardView
            style={{ flex: 1, flexDirection: 'row', borderWidth: 2 }}
            cardElevation={6}
            cardMaxElevation={6}
            cornerRadius={50}
          >
            <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon}
              onPress={() => { this.props.navigation.navigate('SearchCauses') }} />
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
    
      <View style={ styles.round } underlayColor="transparent">
      <Pressable onPress={()=>{
       this.props.navigation.navigate('AboutCase', { id: item.id });
  }}>
      <ImageBackground
//  source={require('../assets/maketCardPhoto.png')}
  source={{uri: `${IMAGES_URL+item.avatarImage}` }}
  style={styles.bgContainer}
  imageStyle={{ borderRadius: 10 }}>

  <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
      <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
      <Image style={{width:50 , height:60 ,  alignSelf: 'center' }} source={{uri: `${item.iconImage}` }} />
      <Text style={{ color: '#fff', textAlign: 'center' }}>Ramaining</Text>
      <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{item.remaining} EGP</Text>
  </View>

</ImageBackground>
<View style={{ flexDirection: 'row', }}>
  <Text style={{ flex: 1, color: '#000', marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
  <Text style={{ color: Colors.primary, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>85%</Text>
</View>
  </Pressable>
</View>
      // <View style={{ marginHorizontal: 10 }}>
      //   <Pressable onPress={() => {

      //     this.props.navigation.navigate('AboutCase', { id: item.id });
      //   }}>
      //     <CasesCard style={styles.cusomBord}
      //       iconImage={item.iconImage}
      //       round
      //       remainingText={item.remaining}
      //       imageUrl={item.avatarImage}
      //       name={item.name} />
      //   </Pressable>

      // </View>

    );
  };

  _getCausesApi = async () => {
    //API is too fast, adding timeout to visualize loader
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    currentUser = await AsyncStorageProvider.getItem('currentUser');
    if (currentUser) {
      const json = JSON.parse(currentUser);
      await this.props.getCasesData(json.access_token, this.page)
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
        avatarImage: v.image,
        remaining: v.remaining,
        iconImage: `${IMAGES_URL}${v.cause.image}`
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

     
        <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 10}} onPress={() => this.props.navigation.navigate('SearchCases')}>
          <CardView
            //style={{ flex: 1, flexDirection: 'row', paddingVertical: 5 }}
            style={styles.card}
           
            cornerRadius={50}
          >

            <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon}  />

            <Text  style={
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
      <View style={{flex:1, backgroundColor:'#fff'}}>

      
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaViewContainer}>
          <View style={styles.safeAreaViewSubContainer}>
            {/* {this.state.initial && <LoadingPlaceholder />} */}
            <Text style={styles.Uppertext}>Cases</Text>
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
                  style={{ marginTop: 15 }}
                  numColumns={2}
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
  getCasesData: bindActionCreators(getCasesData, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cases)