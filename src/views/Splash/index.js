import React, {Component} from 'react';
import {StatusBar, ImageBackground , View , Text , Image} from 'react-native';
import {connect} from 'react-redux';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import {autoLogin} from '../../actions/AuthActions';
import {bindActionCreators} from 'redux';
import CutomeButton from '../../component/CustomeButton';
import styles from './style';
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
      } 
    } catch (error) {
    this.setState({loading:false})

    }
  
  };

  renderAndicator(){
    return(<></>);
  }
  renderCompnent(){
    return(<View style={styles.parentContainer}>
<StatusBar translucent backgroundColor="transparent" />
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
