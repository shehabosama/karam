import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions ,TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CutomeVerifyInput from "../component/CustomeVerifyInput";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";

import Icon from 'react-native-vector-icons/Ionicons';
export const SignupVerifyAccount = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
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
            
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.Uppertext}>Verify Account</Text>
                <Text style={styles.Lowertext}>Enter 4 digits code received on your email</Text>

                <View style={styles.verifyFiledContainer}>
                    <CutomeVerifyInput style={styles.customIntput} round />
                    <Text style={styles.spreatedDash}>_</Text>
                    <CutomeVerifyInput round style={styles.customIntput} />
                    <Text style={styles.spreatedDash}>_</Text>
                    <CutomeVerifyInput round style={styles.customIntput} />
                    <Text style={styles.spreatedDash}>_</Text>
                    <CutomeVerifyInput round style={styles.customIntput} />

                </View>

                <View style={styles.HorizontalContainer }>
                    <Icon name="reload" size={15} color={Colors.primary} style={{marginTop:19}}/>
                    <Text style={styles.HintText}>Resend Code</Text>
                </View>
            </ScrollView>
            <CutomeButton style={styles.btn} text="Verify" round onPress={()=>{navigation.navigate('SignupObjectives')}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        height :Dimensions.height,
        marginHorizontal: 15,
        marginTop:20
    


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
        color: Colors.primary,
        marginTop: 5,
     
    },
    spreatedDash: {
        fontSize: 20,
        fontFamily: 'SFProDisplay-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 10,
        marginHorizontal: 10
    },
    Lowertext: {
        
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: Colors.primary,
        textAlign: 'justify',
        marginTop: 10,
       
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
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
    customIntput: {
        
        width: 50
    },
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal:25,
    },
});

export default SignupVerifyAccount;