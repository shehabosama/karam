import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ObjectiveCard from "../component/ObjectiveCard";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const SignupPreferences = ({ route , navigation }) => {
    const [waterCheck, setWaterCheck] = useState(false);
    const [roofsCheck, setRoofsCheck] = useState(false);
    const [specialNeedsCheck, setSpecialNeedsCheck] = useState(false);
    const [educationCheck, setEducationCheck] = useState(false);
    const [prisonCheck, setPrisonCheck] = useState(false);
    const [orphansCheck, setOrphansCheck] = useState(false);

    let userPrefrences = {
        userData:route.params.userData,
        userObjective:route.params.userObjecive,
         userPrefrences:{
            waterCheck:waterCheck,
            roofsCheck:roofsCheck,
            specialNeedsCheck:specialNeedsCheck,
            educationCheck,educationCheck,
            prisonCheck:prisonCheck,
            orphansCheck:orphansCheck
        }
    };
   
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()}
                />
            </TouchableOpacity>

            <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Donation Preference</Text>
                <Text style={styles.Lowertext}>Select all of causes you want</Text>
                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                    <View style={{ flex: 1, paddingLeft: 20 }}>
                      

                        <TouchableWithoutFeedback style={styles.selectionImage} onPress={()=>{setWaterCheck(waterCheck ? false: true)}}  >
                            <Image
                                source={require("../assets/water.png")}
                                resizeMode="cover"
                                style={styles.selectionImage}
                            />
                            {waterCheck && <CheckBox style={{
                               position:'absolute',
                               alignSelf:'center',
                            }} value={waterCheck} />}
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback style={styles.selectionImage} onPress={()=>{setRoofsCheck(roofsCheck ? false: true)}}  >
                            <Image
                                source={require("../assets/roofs.png")}
                                resizeMode="cover"
                                style={styles.selectionImage}
                            />
                            {roofsCheck && <CheckBox style={{
                               position:'absolute',
                               alignSelf:'center',
                            }} value={roofsCheck} />}
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>{setSpecialNeedsCheck(specialNeedsCheck ? false: true)}}  >
                            <Image
                                source={require("../assets/spacial_needs.png")}
                                resizeMode="cover"
                                style={styles.selectionImage}
                            />
                            {specialNeedsCheck && <CheckBox style={{
                               position:'absolute',
                               alignSelf:'center',
                            }} value={specialNeedsCheck} />}
                        </TouchableWithoutFeedback>
                     
                    </View>

                    <View style={{ flex: 1, paddingRight: 20 }}>
                    <TouchableWithoutFeedback style={styles.selectionImage} onPress={()=>{setEducationCheck(educationCheck ? false: true)}}  >
                            <Image
                                source={require("../assets/education.png")}
                                resizeMode="cover"
                                style={styles.selectionImage}
                            />
                            {educationCheck && <CheckBox style={{
                               position:'absolute',
                               alignSelf:'center',
                            }} value={educationCheck} />}
                        </TouchableWithoutFeedback>
                       
                     
                        
                        <TouchableWithoutFeedback  onPress={()=>{setPrisonCheck(prisonCheck ? false: true)}}  >
                            <Image
                                source={require("../assets/prison.png")}
                                resizeMode="cover"
                                style={styles.selectionImage}
                            />
                            {prisonCheck && <CheckBox style={{
                               position:'absolute',
                               alignSelf:'center',
                            }} value={prisonCheck} />}
                        </TouchableWithoutFeedback>
         
<TouchableWithoutFeedback onPress={()=>{setOrphansCheck(orphansCheck ? false: true)}}  >
                            <Image
                                source={require("../assets/orphans.png")}
                                resizeMode="cover"
                                style={styles.selectionImage}
                            />
                            {orphansCheck && <CheckBox  style={{
                               position:'absolute',
                               alignSelf:'center',
                    
                            }}  value={orphansCheck} />}
                        </TouchableWithoutFeedback>
                    </View>

                </View>
            </ScrollView>
            <CutomeButton style={styles.btn} text="Continue" round onPress={() => navigation.navigate('SignupGoal',
               
                   userPrefrences
               
            )} />


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
        marginTop: 10,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
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
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    socialImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    ObjectiveCard: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primary
    }
});

export default SignupPreferences;