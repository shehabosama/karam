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
import { cleanError, signIn, signUp } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import { showMessage, validate } from '../../utils/HelperFunctions';
import styles from './style';
import gloable from '../../styles/gloable';
class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            phoneNumber: '',
            nationality: '', emailError: '', passwordError: ''
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
    }
    submitHandler = () => {
        if (this.state.email.trim() == '') {

            this.setState({ emailError: 'email is required' });
        } else if (!validate(this.state.email)) {

            this.setState({ emailError: 'Email incorrect try another email' });
        } else if (this.state.password.length < 8) {

            this.setState({ passwordError: 'Password must be more than 8 character or number' });
        } else {
            this.props.navigation.navigate('SignupProfileDetails', { email: this.state.email, password: this.state.password });
        }
    };

    BackButton = () => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => this.props.navigation.goBack()}
                />
            </TouchableOpacity>
        );
    };
    HeaderTitleForm = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Hey there,</Text>
                <Text style={styles.Lowertext}>Signup to karam</Text>
            </View>
        );
    }
    EmailAndPasswordFrom = () => {
        return (
            <View>
                <Text style={styles.fieldTitle}>Email</Text>
                <CutomeTextInput type="email-address" placeholder="youremail@mail.com" secure={false} onTextInputChange={(username) => {
                    this.setState({ emailError: '' });
                    this.setState({ email: username })
                }} round />
                {!!this.state.emailError && (
                    <Text style={{ color: "red" }}>{this.state.emailError}</Text>
                )}
                <Text style={styles.fieldTitle}>Password</Text>
                <CutomeTextInput placeholder="Enter password" secure={true} onTextInputChange={(password) => {
                    this.setState({ passwordError: '' });
                    this.setState({ password: password })
                }} round />
                {!!this.state.passwordError && (
                    <Text style={{ color: "red" }}>{this.state.passwordError}</Text>
                )}
            </View>
        );
    };

    SocialMediaLAuthForm = () => {
        return (
            <View style={styles.HorizontalContainer}>
                <Image
                    source={require("../../../assets/google.png")}
                    style={styles.socialImage}
                />
                <Image
                    source={require("../../../assets/facebook.png")}
                    style={styles.socialImage}
                />
                <Image
                    source={require("../../../assets/apple.png")}
                    style={styles.socialImage}
                />
                <Image
                    source={require("../../../assets/twitter.png")}
                    style={styles.socialImage}
                />
            </View>
        );
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={gloable.container}>
                    <this.BackButton />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <this.HeaderTitleForm />
                        <this.EmailAndPasswordFrom />
                        <CutomeButton style={styles.btn} text="Signup" onPress={this.submitHandler} round />
                        <Text style={styles.HintText}>Or Continue with Social Account</Text>
                        <this.SocialMediaLAuthForm />
                        <View style={styles.HorizontalContainer}>
                            <Text style={styles.HintText}>Already have an account?</Text>
                            <Text style={styles.ImportanText} onPress={() => this.props.navigation.navigate('Login')}> Log in</Text>
                        </View>
                    </ScrollView>

                </View>
            </View>

        );
    }


}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpScreen);