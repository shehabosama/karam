import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import CheckBox from '@react-native-community/checkbox';
import { connect } from 'react-redux';
import { cleanError, signUp } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import { showMessage } from '../../utils/HelperFunctions';
import styles from './style';
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

        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
        this.props.cleanError();
    }
    submitHandler = () => {
        this.props.cleanError();
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
            this.setState({ loading: true }, () => {
                this.props.signUp({
                    email: this.state.email,
                    password: this.state.password,
                    fullName: this.state.fullName,
                    mobileNumber: this.state.mobileNumber,
                    nationality: this.state.nationality,

                }, this.props.navigation, () => {
                    this.setState({ loading: false })
                }, () => {
                    this.setState({ loading: false })
                });

            })
        }
    };

    BackButton = () => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    };
    HeaderTitleForm = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Complete Profile</Text>
                <Text style={styles.Lowertext}>Lets start by creating your profile!</Text>
            </View>
        );
    }
    InputsFieldsForm = () => {
        return (
            <View>
                <Text style={styles.Lowertext}>Full Name</Text>
                <CutomeTextInput placeholder="Your name" round onTextInputChange={(fullName) => this.setState({ fullName: fullName })} />
                <Text style={styles.Lowertext}>Mobile</Text>
                <CutomeTextInput type="numeric" placeholder="Your mobile number" round onTextInputChange={(mobileNumber) => this.setState({ mobileNumber: mobileNumber })} />
                <Text style={styles.Lowertext}>Nationality</Text>
                <CutomeTextInput placeholder="Your nationality" round onTextInputChange={(nationality) => this.setState({ nationality: nationality })} />
            </View>
        );
    }
    AgreementTermsFrom = () => {
        return (
            <View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={this.state.agreeTerms}
                        onValueChange={(value) => this.setState({ agreeTerms: value })}
                        style={styles.checkbox}
                    />
                    <Text style={styles.HintText}>Agree to Terms and Conditions</Text>
                </View>
                <Text style={styles.HintText}>Once you Click on verify email , you will receive an email to activate your account</Text>
            </View>
        );
    }
     renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };

    render() {
        return (
            <View style={styles.container}>
                <this.BackButton />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <this.HeaderTitleForm />
                    <this.InputsFieldsForm />
                    {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                    <this.AgreementTermsFrom />
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Continue" round onPress={this.submitHandler} />}

                </ScrollView>
            </View>
        );
    }
}

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