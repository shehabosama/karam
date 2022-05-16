import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        backgroundColor:'#fff'
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: Colors.primary,
        marginTop: 30,
        marginHorizontal:10,
    },
    HintBoldText: {
        fontSize: 14,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
        marginTop: 8
    },
    HintSmallText: {
        fontSize: 14,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
        marginTop: 5
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
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        
    },
    socialImage: {
        width: 59,
        height: 63,
        marginHorizontal: 20,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        ...Platform.select({
            android: {
                elevation: 2,
                flex: 1,
                flexDirection: 'row',
                
                padding: 5,
                alignItems: "center",
                
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                flex: 1, flexDirection: 'row',
                borderWidth: 2,
                padding: 5,
                alignItems: "center",
                marginHorizontal: 10
            },
        }),
    },
    icon: {
        marginTop: 45,
        marginStart:3,
        marginVertical:4,
        marginHorizontal:5
  
      },
      cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row'
    },
    round: {
        
        borderRadius: 10,
        alignSelf:"center",
        borderColor: '#23596A',
        marginVertical:5,
        marginHorizontal:10,
    },
    bgContainer: {
        width:170,
        height:170,
        flex:1,  
    },
});
export default styles;