import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
const styles = StyleSheet.create({

    image: {
        marginTop: 60,
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
        flex: 1,
        color: Colors.primary
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
        fontSize: 16,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',

    },
    HintText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',

        color: '#23596A',
        textAlign: 'center',
    },

    btn: {
        marginBottom: 5,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
    renderError: {

        color: Colors.danger,
    },
    card: {
        
        alignItems: 'center',
        backgroundColor: '#fff',
        ...Platform.select({
            android: {
                elevation: 5,
                 flexDirection: 'row',  alignItems: 'center', marginTop: 5,marginHorizontal:1
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                 flexDirection: 'row',  alignItems: 'center',  marginTop: 15,marginHorizontal:1
            },
        }),
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop:20
    },
});

export default styles;