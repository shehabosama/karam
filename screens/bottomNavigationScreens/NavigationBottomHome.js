import React, { useEffect, useState  } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity ,BackHandler,Alert , AppState}  from 'react-native';
import CutomeDonationMeter from "../../component/CustomeDonationMeterBord";
import { Colors } from "../../constants";
import CasesCard from "../../component/CasesCard";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/actions/AuthActions";
export const NavigationBottomHome = ({ route, navigation }) => {
    const {data} = useSelector(state=>state.data);
    //const [data , setData]= useState({})
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData());
        
    },[dispatch]);
    
    console.log('Data from Home Tabs',data);
  
useFocusEffect(
React.useCallback(() => {
  const onBackPress = () => {
    Alert.alert("Hold on!", "Are you sure you want to Exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  BackHandler.addEventListener("hardwareBackPress", onBackPress);

  return () =>
    BackHandler.removeEventListener("hardwareBackPress", onBackPress);

}, []));

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Hello, Salma!</Text>
                <CutomeDonationMeter style={styles.cusomBord} text="Set Goal" round />
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{
                        flex: 1, fontSize: 17,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 10,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Causes</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Causes')} >
                        <Text style={styles.HintText}>View All</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.HorizontalContainer}>
                    <Image
                        source={require("../../assets/waterIcon.png")}
                        style={styles.socialImage}
                    />
                    <Image
                        source={require("../../assets/roofIcon.png")}
                        style={styles.socialImage}
                    />
                    <Image
                        source={require("../../assets/educatoinIcon.png")}
                        style={styles.socialImage}
                    />
                    <Image
                        source={require("../../assets/prisonIcon.png")}
                        style={styles.socialImage}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        flex: 1, fontSize: 17,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 10,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Cases</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Cases')} >
                        <Text style={styles.HintText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <CasesCard style={styles.cusomBord} round />
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Text style={{
                        flex: 1, fontSize: 17,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 10,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Providers</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProviderScreen')} >
                        <Text style={styles.HintText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <CasesCard style={styles.cusomBord} round />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 15,
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
        shadowRadius: 100,
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
});

export default NavigationBottomHome;