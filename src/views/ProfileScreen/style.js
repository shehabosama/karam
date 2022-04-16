import {StyleSheet} from 'react-native';
import { Colors } from '../../constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        
    },
    image: {
        marginTop: 20,
        width: 25,
        height: 18,
        alignSelf: "flex-start",
    },
    editImage: {

        marginTop: 20,
        width: 25,
        height: 28,
        alignSelf: "flex-start",
        marginEnd: 10,
        marginTop: 50,
        position: 'absolute',
        end: 0,
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

        color: '#23596a',
        marginTop: 15,
        textAlign: 'center'

    },
    Lowertext: {
        width: 275,
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
        marginTop: 10,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
        marginTop: 5
    },
    AccountText: {
        fontSize: 20,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 30,
        marginBottom:10,
        color: Colors.blackText,
        fontWeight: 'bold',

    },
    Support: {
        fontSize: 20,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 35,
        marginBottom:10,
        color: Colors.blackText,
        fontWeight: 'bold',

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
    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row'
    },
    HorizontalContainer: {

        flexDirection: 'row',
        justifyContent: 'center',
      
    },
    socialImage: {
        width: 59,
        height: 83,
        marginHorizontal: 20
    },
    icon: {
        margin: 5,
    },



});
export default styles;