import { Colors } from "../constants";
export default {
    loader:{
        marginTop:20,
    },
    noData:{
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'Poppins-Regular',
    },
    listContainer:{
        paddingHorizontal:20,
    },
    listItem:{
        backgroundColor:'#fff',
        borderRadius:20,
        padding:20,
        borderLeftWidth:2,
        borderLeftColor:Colors.primary,
        marginTop:10,
    },
    input:{
        borderBottomColor:Colors.primary,
        textAlign:'flext-start',
        borderStyle:'solid',
        fontSize:20,
        textAlign:'left',
        
    },
    switchContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItem:'center',
        marginBottom:30,
    },
    switchText:{
        fontSize :18,
        fontFamily:'Poppins-Regular'
    },
    card: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: '#fff',
        ...Platform.select({
          android: {
            elevation: 2,
          },
          ios: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
          },
        }),
      },
};
 