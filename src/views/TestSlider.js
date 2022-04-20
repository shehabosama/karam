// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import CutomeButton from '../component/CustomeButton';
import { Colors } from '../constants';


const TestSlider = () => {
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        setShowRealApp(true);
    };

    const RenderNextButton = () => {
        return (
            <CutomeButton text="Continue" round style={{ marginHorizontal: 20, marginVertical: 10 }}onPress={()=>this.props.navigation.navigate('Login')} />
        );
    };

    const RenderItem = ({ item }) => {
        console.log(item.image);
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                   // alignItems: 'center',
                 //   justifyContent: 'space-around',
                    paddingBottom: 100,
                    
                }}>
               
                <Image
                    style={styles.introImageStyle}
                    source={item.image} />
                <View style={{borderBottomColor:Colors.primary , borderBottomWidth:0.5 , marginHorizontal:20}}/>
                <Text style={styles.Uppertext}>
                    {item.title}
                </Text>
               

                <Text style={styles.smallText}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (


        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                renderDoneButton={RenderNextButton}
                // renderNextButton={RenderNextButton}
                showNextButton={false}
                showDoneButton={false}
                renderSkipButton={RenderNextButton}
                bottomButton={true}
                activeDotStyle={{ backgroundColor: Colors.primary }}

            />
            <RenderNextButton />
        </View>



    );
};

export default TestSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        marginTop:100,
        alignSelf:'center',
        resizeMode: "contain"
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.primary,
        marginTop: 15,

    },
    smallText: {
        fontSize: 15,
        fontFamily: 'SFProDisplay-Regular',
        //marginHorizontal:50,
        width:273,
        alignSelf: 'center',
        color: Colors.primary,
        marginTop: 15,
        textAlign:"center"

    },
});

const slides = [
    {
        key: 's1',
        text: 'Explore vetted cases and review all the details, funding and locations',
        title: 'Explore Cases',
        image: require('../../assets/firstSplashScreen.png'),

        backgroundColor: '#fff',
    },
    {
        key: 's2',
        title: 'Monitor Updates',
        text: 'Get live updates about cases your donated to and see you impact',
        image: require('../../assets/secondSplashScreen.png'),
        backgroundColor: '#fff',
    },
    {
        key: 's3',
        title: 'Automate Donations',
        text: 'Donate to cases, subscribe to causes and see your impact with live updates',
        image: require('../../assets/thirdSplashScreen.png'),
        backgroundColor: '#fff',
    },
    {
        key: 's4',
        title: 'Set Preferences',
        text: ' Donate to cases, subscribe to causes and see your impact with live updates',
        image: require('../../assets/fourthSplashScreen.png'),
        backgroundColor: '#fff',
    },

];