import React, {Component} from 'react';
import {ActivityIndicator, ImageBackground , StyleSheet , Dimensions , View , Text , Image} from 'react-native';
import {connect} from 'react-redux';


import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import {autoLogin} from '../../actions/AuthActions';
import {bindActionCreators} from 'redux';
import CutomeButton from '../../component/CustomeButton';

class SplashScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true , 
    }
  }
  componentDidMount() {
    this.checkUser();
  }
  checkUser = async () => {
    try {
      currentUser = await AsyncStorageProvider.getItem('currentUser');
      if (currentUser) {
        this.props.autoLogin(JSON.parse(currentUser));
        this.setState({loading:false})
        // this.props.  navigation.reset({
        //   index: 0,
        //   routes: [
        //     {s
        //       name: 'HomeTabs',
        //       params: { someParam: 'Param1' },
        //     },
        //   ],
        // })
       // this.props.navigation.navigate('HomeTabs');
      } 
    } catch (error) {
    //  this.props.navigation.navigate('Login');
    this.setState({loading:false})

    }
  
  };

  renderAndicator(){
    return(<></>);
  }
  renderCompnent(){
    return(<View style={styles.parentContainer}>

      <ImageBackground
        source={require('../../../assets/splash_image.png')}
        style={styles.bgContainer}
      >
        <View style={styles.bgContainer}>
          <Image
            source={require("../../../assets/karam_logo.png")}
            style={styles.image}
          />
          <Text style={styles.Uppertext}>Welcome to KRM </Text>
          <Text style={styles.Lowertext} >Donate to cases, subscribe to
            causes and see your impact with live updates</Text>
          <CutomeButton style={styles.btn} text='Get Started' round onPress={() => {
            this.props.navigation.navigate('Login');
          }} />
        </View>
  
      </ImageBackground>
    </View>);
  }
  render() {
   
    return (
      this.state.loading? this.renderAndicator():this.renderCompnent()
    );
  
  }
}


var styles = StyleSheet.create({

  parentContainer: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
    flexDirection: 'column',

  },
  bgContainer: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  image: {

    marginTop: Dimensions.get('window').height - 500,
    width: 78,
    height: 83,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  Uppertext: {

    fontSize: 34,
    fontFamily: 'SF-Pro-Rounded-Regular',
    alignSelf: 'center',
    color: '#fff',
    marginTop: 20
  },
  Lowertext: {
    width: 275,
    fontSize: 16,
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    textAlign: 'justify',
    marginTop: 10,
  },
  btn: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(25, 104, 102, 0.7)',
    marginTop: 50,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
  },
});

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});
const mapDispatchToProps = dispatch => ({
  autoLogin: bindActionCreators(autoLogin, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
