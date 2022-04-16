import {StyleSheet, Dimensions} from 'react-native';
import { Colors } from '../../constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.height,
        marginHorizontal: 15,
        marginTop: 20
    },
    image: {
        marginTop: 40,
        width: 25,
        height: 18,
        alignSelf: "flex-start",
    },
    verifyFiledContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 80,
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: Colors .primary,
        marginTop: 5,
    },
    spreatedDash: {
        fontSize: 20,
        fontFamily: 'SFProDisplay-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 5,
        marginHorizontal: 1,
        fontWeight: 'bold'
    },
    Lowertext: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: Colors.primary,
        textAlign: 'justify',
        marginTop: 0,
    },
    HintText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: Colors.primary,
        marginHorizontal: 5,
        marginVertical: 10,

    },

    btn: {
        marginVertical: 50,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
   
    HorizontalContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
       
       
    },
    round: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#23596A',
        marginHorizontal: 10,
        paddingHorizontal: 10
    }
});
export default styles;