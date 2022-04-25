import {Dimensions , StyleSheet} from 'react-native';
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
      marginTop: 20,
      fontWeight:"800"
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
  export default styles;