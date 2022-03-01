import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import CutomeButton from "../component/CustomeButton";
import { Dimensions } from "react-native";
const Splash = ({navigation}) => {

  return (
    <View style={styles.parentContainer}>

      <ImageBackground
        source={require('../assets/splash_image.png')}
        style={styles.bgContainer}
      >
        <View style={styles.bgContainer}>
          <Image
            source={require("../assets/karam_logo.png")}
            style={styles.image}
          />
          <Text style={styles.Uppertext}>Welcome to KRM </Text>
          <Text style={styles.Lowertext} >Donate to cases, subscribe to 
          causes and see your impact with live updates</Text>
          <CutomeButton style={styles.btn} text='Get Started' round onPress={()=>{
            navigation.navigate('Login');
          }}/>
        </View>

      </ImageBackground>
    </View>
  );

};
var styles = StyleSheet.create({

  parentContainer: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
    flexDirection:'column',

  },
  bgContainer:{
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
    marginTop:20
  },
  Lowertext: {
    width:275,
    fontSize: 16,
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    textAlign:'justify',
    marginTop:10,
  },
  btn:{
    marginHorizontal:20,
    backgroundColor: 'rgba(25, 104, 102, 0.7)',
    marginTop:50,
    shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 10,
  elevation: 10,
    // position: 'absolute',
    // width: 50,
    // height: 50,
    // bottom: 0,
    // left: Dimensions.get('window').width - 70,
    // backgroundColor: 'red',
    // zIndex: 100,
    
  },
});

export default Splash;