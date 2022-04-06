import {StyleSheet} from 'react-native';
import { Colors } from '../../constants';

const styles = StyleSheet.create({
    activityIndicator: { color: '#000' },
    renderItemContainer: {
      marginHorizontal: 16,
      marginVertical: 4,
  
    },
    safeAreaViewSupContainer: { flex: 1 },
    renderHeaderText: {
      fontSize: 2,
  
      fontWeight: 'bold',
  
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    safeAreaViewContainer: { flex: 1 },
  
  
    container: {
      flex: 1,
      marginHorizontal: 15,
    },
  
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
      fontSize: 34,
      fontFamily: 'SFProDisplay-Regular',
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: '#23596a',
      marginTop: 30,
  
    },
    cusomBord: {
      backgroundColor: 'rgba(35, 89, 106, 1.0)',
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 100,
      elevation: 10,
      flexDirection: 'row',
    }
    ,
    icon: {
      marginTop: 10,
    },
  
  });
export default styles;  