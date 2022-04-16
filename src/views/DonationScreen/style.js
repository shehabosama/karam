import {StyleSheet} from 'react-native';
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
        color: '#23596a',
        marginTop: 15,

    },
    Lowertext: {
        flex: 1, fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
    },
    HintText: {
        fontSize: 17,
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
        shadowRadius: 10,
        elevation: 10,
        flexDirection: 'row'
    },
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    socialImage: {
        width: 59,
        height: 83,
        marginHorizontal: 20
    },
    activeTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        marginEnd: 15,
    },
    nonActiveTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: Colors.placeHolder,
        fontWeight: 'bold',
        marginEnd: 15,
    },
});

export default styles;