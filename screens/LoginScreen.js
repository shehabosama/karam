import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity ,Keyboard  ,ScrollView} from 'react-native';
import CutomeTextInput from "../component/CustomeInput";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";



export const Login = ({navigation}) => {
    const onClickFunction = () => {
        Keyboard.dismiss()
    };
    return (
        <View style={styles.container}>
          <TouchableOpacity 
                onPress={()=>navigation.goBack()}>
            <Image
                source={require("../assets/backButton.png")}
                style={styles.image}
                onPress={()=>navigation.goBack()}
            />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            
            <Text style={styles.Uppertext}>Hey there,</Text>
            <Text style={styles.Lowertext}>Log in to karam</Text>
            <Text style={styles.Lowertext}>Email</Text>
            <CutomeTextInput placeholder="youremail@mail.com" round />
            <Text style={styles.Lowertext}>Password</Text>
            
            <CutomeTextInput placeholder="Enter password" round />
            

            <CutomeButton style={styles.btn} text="Log in" round />
            <Text style={styles.HintText}>Or Continue with Social Account</Text>

            <View style={styles.HorizontalContainer}>
            <Image
            source={require("../assets/google.png")}
            style={styles.socialImage}
          />
          <Image
            source={require("../assets/facebook.png")}
            style={styles.socialImage}
          />
          <Image
            source={require("../assets/apple.png")}
            style={styles.socialImage}
          />
          <Image
            source={require("../assets/twitter.png")}
            style={styles.socialImage}
          />
            </View>
            <View style={styles.HorizontalContainer}>
            <Text style={styles.HintText}>Don't have an account?</Text>
            <Text style={styles.ImportanText} onPress={()=>navigation.navigate('Signup')}> Create Now</Text>
            </View>
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    image: {

        marginTop: 20,
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
        marginTop: 10,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.placeHolder,
    },
    ImportanText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.importanText,
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
    HorizontalContainer:{
        flexDirection:'row',
        justifyContent:'center',
        
    },
    socialImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        flex:1,
      },
});

export default Login;