import React, { Component } from 'react';
import { StatusBar, ImageBackground, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import { autoLogin } from '../../actions/AuthActions';
import { bindActionCreators } from 'redux';
import CutomeButton from '../../component/CustomeButton';
import styles from './style';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '../../constants';
class SliderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
        this.setState({ loading: false })
      }
    } catch (error) {
      this.setState({ loading: false })

    }

  };
  RenderNextButton = () => {
    return (
      <CutomeButton text="Continue" round
        style={{
          marginHorizontal: 20,
          marginTop: 5,
          marginBottom:40
        }}
        onPress={() => this.props.navigation.navigate('Login')} />
    );
  };

  RenderItem = ({ item }) => {
 
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          // alignItems: 'center',
          //   justifyContent: 'space-around',
          paddingBottom: 100,

        }}>

        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <View style={{ borderBottomColor: Colors.primary, borderBottomWidth: 0.5, marginHorizontal: 20 }} />
        <Text style={styles.Uppertext}>
          {item.title}
        </Text>


        <Text style={styles.smallText}>
          {item.text}
        </Text>
      </View>
    );
  };
  renderAndicator() {
    return (<></>);
  }
  renderCompnent() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppIntroSlider
          data={slides}
          renderItem={this.RenderItem}
          //onDone={onDone}
          // renderDoneButton={RenderNextButton}
          // renderNextButton={RenderNextButton}
          showNextButton={false}
          showDoneButton={false}
          renderSkipButton={this.RenderNextButton}
          bottomButton={true}
          activeDotStyle={{ backgroundColor: Colors.primary }}

        />
        <this.RenderNextButton />
      </View>);
  }
  render() {

    return (
      this.state.loading ? this.renderAndicator() : this.renderCompnent()
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
)(SliderScreen);
const slides = [
  {
    key: 's1',
    text: 'Explore vetted cases and review all the details, funding and locations',
    title: 'Explore Cases',
    image: require('../../../assets/firstSplashScreen.png'),

    backgroundColor: '#fff',
  },
  {
    key: 's2',
    title: 'Monitor Updates',
    text: 'Get live updates about cases your donated to and see you impact',
    image: require('../../../assets/secondSplashScreen.png'),
    backgroundColor: '#fff',
  },
  {
    key: 's3',
    title: 'Automate Donations',
    text: 'Donate to cases, subscribe to causes and see your impact with live updates',
    image: require('../../../assets/thirdSplashScreen.png'),
    backgroundColor: '#fff',
  },
  {
    key: 's4',
    title: 'Set Preferences',
    text: ' Donate to cases, subscribe to causes and see your impact with live updates',
    image: require('../../../assets/fourthSplashScreen.png'),
    backgroundColor: '#fff',
  },

];