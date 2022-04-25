import { Colors } from "../constants";
import { Platform } from 'react-native';

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
        fontSize:17,
        textAlign:'left',
        paddingStart:10
        
    },
    VerfiyInput:{
      borderBottomColor:Colors.primary,
      textAlign:'flext-start',
      borderStyle:'solid',
      fontSize:17,
      textAlign:'left',
      paddingStart:5
      
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
    
      container: {
        flex: 1,
        marginHorizontal: 22,
    },
};
 