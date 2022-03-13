import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import CheckBox from '@react-native-community/checkbox';
import { connect } from 'react-redux';
import { cleanError, signIn, signUp } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import { showMessage, validate } from '../../utils/HelperFunctions';
class SignupProfileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: this.props.route.params.email,
            password: this.props.route.params.password,
            fullName: '',
            mobileNumber: '',
            nationality: '',
            agreeTerms: false
        };

       
    }


    componentDidMount() {
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }

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
       // console.log(this.props.error);

    };

    submitHandler = () => {
        let isNumber = !isNaN(+this.state.mobileNumber);
        if (this.state.fullName.trim() == '') {
            showMessage('Full Name is required!');
        } else if (this.state.mobileNumber.trim() == '') {
            showMessage('Mobile number is required!');
        } else if (this.state.nationality.trim() == '') {
            showMessage('Nationality is required!');
        } else if (!this.state.agreeTerms) {
            showMessage('You have to Agree Terms and Conditions');
        } else if (this.state.mobileNumber.length < 11) {
            showMessage('No phone number less than eleven numbers');
        } else if (!isNumber) {
            showMessage('Please write only numbers in phone number');
        } else {
            // this.setState({error:false});
            // this.setState({ loading: true }, () => {
            //     this.props.signUp({ email: this.state.email,
            //          password: this.state.password ,
            //          fullName : this.state.fullName,
            //          mobileNumber:this.state.mobileNumber ,
            //          nationality: this.state.nationality,

            //          }, this.props.navigation);
            //     setTimeout(() => {
            //         this.setState({ loading: false })
            //     }, 1000);
            // })
                this.props.navigation.navigate('SignupVerifyAccount');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image
                        source={require("../../../assets/backButton.png")}
                        style={styles.image}
                     
                    />
                </TouchableOpacity>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <Text style={styles.Uppertext}>Complete Profile</Text>
                    <Text style={styles.Lowertext}>Lets start by creating your profile!</Text>
                    <Text style={styles.Lowertext}>Full Name</Text>
                    <CutomeTextInput placeholder="Your name" round onTextInputChange={(fullName) => this.setState({fullName : fullName})} />
                    <Text style={styles.Lowertext}>Mobile</Text>
                    <CutomeTextInput type="numeric" placeholder="Your mobile number" round onTextInputChange={(mobileNumber) => this.setState({mobileNumber:mobileNumber})} />
                    <Text style={styles.Lowertext}>Nationality</Text>
                    <CutomeTextInput placeholder="Your nationality" round onTextInputChange={(nationality) => this.setState({nationality : nationality})} />
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.agreeTerms}
                            onValueChange={(value)=>this.setState({agreeTerms:value})}
                            style={styles.checkbox}
                        />
                        <Text style={styles.HintText}>Agree to Terms and Conditions</Text>
                    </View>
                    <Text style={styles.HintText}>Once you Click on verify email , you will receive an email to activate your account</Text>
                    <CutomeButton style={styles.btn} text="Continue" round onPress={this.submitHandler} />

                </ScrollView>
            </View>
        );
    }
}


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
    checkbox: {
        alignSelf: "center",
    },

});


const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    error: state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    signUp: bindActionCreators(signUp, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupProfileDetails);