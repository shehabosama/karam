import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   
    image: {

        marginTop: 50,
        width: 25,
        height: 18,
        alignSelf: "flex-start",

    },
    selectionImage: {
        alignSelf: "center",
        marginVertical: 5,

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

});
export default styles;