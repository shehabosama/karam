import {StyleSheet} from 'react-native';
import { Colors } from '../../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor:'#fff'
},
    activityIndicator: { color: '#000' },
    renderItem: {
      marginHorizontal: 16,
      marginVertical: 4,
    },
    safeAreaViewSubContainer: { flex: 1 },
    renderHeader: {
      fontSize: 2,
      fontWeight: 'bold',
    },
   
    safeAreaViewContainer: { flex: 1 },
   
    input: {
      borderBottomColor: Colors.primary,
      textAlign: 'center',
      borderStyle: 'solid',
      fontSize: 50,
      borderBottomWidth: 1.0,
      paddingBottom: 15,
      fontWeight: 'bold',
      flex: 1
    },
    Uppertext: {
      marginHorizontal:10,
      fontSize: 34,
      fontFamily: 'SFProDisplay-Regular',
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: '#23596a',
      marginTop: 30,
      marginBottom:15
    },
    cusomBord: {
      backgroundColor: 'rgba(35, 89, 106, 1.0)',
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 100,
      elevation: 10,
      flexDirection: 'row',
    },
    icon: {
      marginTop: 8,
      marginStart:3,
      marginVertical:4
      

    },
    card: {
      marginVertical:4,
      flex: 1, 
      flexDirection: 'row',
      backgroundColor: '#fff',
      ...Platform.select({
        android: {
          elevation: 5,
          flex: 1, flexDirection: 'row', borderWidth: 2 
        },
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          flex: 1, flexDirection: 'row', borderWidth: 2 
        },
      }),
    },
    ItemCard: {
      marginVertical:4,
      paddingVertical:10,
      flex: 1, 
      flexDirection: 'row',
      backgroundColor: '#fff',
      ...Platform.select({
        android: {
          elevation: 5,
          flex: 1, flexDirection: 'row', borderWidth: 2 
        },
        ios: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          flex: 1, flexDirection: 'row', borderWidth: 2 
        },
      }),
    },

  });
export default styles;