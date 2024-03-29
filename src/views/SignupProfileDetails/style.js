import {StyleSheet} from 'react-native';
import { Colors } from '../../constants';
const styles = StyleSheet.create({
  
    image: {

        marginTop: 50,
        width: 25,
        height: 18,
        alignSelf: "flex-start",

    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 15,

    },
    Lowertext: {
        width: 275,
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
       
    },
  
    fieldTitle: {
        width: 275,
        fontSize: 14,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
       marginTop:10
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
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
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop:20
    },
    checkbox: {
        alignSelf: "center",
    },
    renderError: {

        color: Colors.danger,
    },
});
export default styles;