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
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import { connect } from 'react-redux';
import { cleanError, updateUserInfo} from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import DonationCard from '../../component/DonationCard';
import { showMessage, validate } from '../../utils/HelperFunctions';
import styles from './style';
class PersonalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            password: '',
            confirmPassword:'',
            fullName: '',
            mobileNumber: '',
            nationality: '',
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
        }else if(this.state.password !== this.state.confirmPassword){
            showMessage('Make sure that you write same password in confirm field');   
        } else {
            // this.setState({error:false});
            this.setState({ loading: true }, () => {
                this.props.updateUserInfo({
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
                <Text style={styles.Uppertext}>Update Profile</Text>
                
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
                <Text style={styles.Lowertext}>Password</Text>
                <CutomeTextInput placeholder="Password" round onTextInputChange={(password) => this.setState({ password: password })} />
                <Text style={styles.Lowertext}>Confirm Password</Text>
                <CutomeTextInput placeholder="Confirm Password" round onTextInputChange={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })} />
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
                    
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Update" round onPress={this.submitHandler} />}

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
    updateUserInfo: bindActionCreators(updateUserInfo, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonalInformation);