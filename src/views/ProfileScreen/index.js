import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import DonationCard from '../../component/DonationCard';
import { showMessage, validate } from '../../utils/HelperFunctions';
class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false};

    }

    componentDidMount() {
        this.checkUser();
        // if (this.props.currentUser !== null){
        //     this.setState({loading:false})
        // }else if(this.props.error !== null){
        //     this.setState({loading:false})
        // }
      
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(
        //   'TCL: LoginScreen -> componentDidUpdate -> prevProps, prevState, snapshot',
        //   prevProps,
        //   prevState,
        //   snapshot,
        // );
        this.checkUser();

        
      
    }
    componentWillUnmount() {
        this.props.cleanError();
        
    }
    checkUser = async () => {
        // if (this.props.currentUser) {
        //     this.props.navigation.navigate('HomeTabs');
        // }
       // console.log(this.props.currentUser);
     
        
    };
    renderError = () => {
       // this.setState({error: this.props.error});
   
        return <Text style={styles.renderError}>{this.props.error}</Text>;
      };

   

    render() {
 
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('PersonalInformation')}>
                     <Image
                source={require("../../../assets/maketCardPhoto.png")}
                style={{ height: 81, width: 83, marginTop: 20, alignSelf: 'center', borderRadius: 50 }}

            />
                </TouchableOpacity>
           
            <Text style={styles.smalBoldText}>Account</Text>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Preferred Causes</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Notification Settings</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>



            <Text style={styles.smalBoldText}>Support</Text>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>
            <View style={styles.HorizontalContainer}>
                <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Information</Text>
                <Image
                    source={require("../../../assets/next.png")}
                    style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                />
            </View>

        </View>
          
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    image: {
        marginTop: 20,
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
        flex: 1
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
        textAlign: 'center',
        marginTop: 5
    },
    smalBoldText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 20,
        color: '#23596A',
        fontWeight: 'bold',

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
        marginTop: 10,
        borderBottomColor: Colors.placeHolder,
        borderBottomWidth: 0.3,

    },
    socialImage: {
        width: 59,
        height: 83,
        marginHorizontal: 20
    },
    icon: {
        margin: 5,
    },
});


const mapStateToProps = state =>({
    currentUser: state.auth.currentUser,
    error:state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileScreen);