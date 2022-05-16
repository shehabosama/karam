import {Dimensions , StyleSheet} from 'react-native';
import { Colors } from '../../constants';
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
  },
  titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
  },
  paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
  },
  introImageStyle: {
      marginTop:40,
      alignSelf:'center',
      resizeMode: "contain"
  },
  introTextStyle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      paddingVertical: 30,
  },
  introTitleStyle: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
  },
  buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },
  Uppertext: {
      fontSize: 34,
      fontFamily: 'SFProDisplay-Regular',
      fontWeight: 'bold',
      alignSelf: 'center',
      color: Colors.primary,
      marginTop: 15,

  },
  smallText: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Regular',
      //marginHorizontal:50,
      width:273,
      alignSelf: 'center',
      color: Colors.primary,
      marginTop: 15,
      textAlign:"center"

  },
});



  export default styles;