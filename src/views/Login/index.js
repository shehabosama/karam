import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import { showMessage, validate } from '../../utils/HelperFunctions';
import styles from './style';
import gloable from '../../styles/gloable';
class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, email: '', password: '', error: '' };
    }
    componentDidMount() {
      //  this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null || this.props.error !== '') {
            this.setState({ loading: false })
            this.setState({ error: this.props.error });
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       // this.checkUser();
    }
    componentWillUnmount() {
        this.props.cleanError();
    }
    checkUser = async () => {
        if (this.props.currentUser) {
            this.props.navigation.navigate('HomeTabs');
        }
    };
    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };

    submitHandler = () => {
        if (this.state.email.trim() == '') {
            showMessage('email is required');
        } else if (!validate(this.state.email)) {
            showMessage('Email incorrect try another email');
        } else if (this.state.password.length < 8) {
            showMessage('Password must be more than 8 character or number');
        } else {
            this.props.cleanError();
            this.setState({ error: false });
            this.setState({ loading: true }, () => {
                this.props.signIn({ email: this.state.email, password: this.state.password }, this.props.navigation, () => {
                    this.setState({ loading: false })
                }, () => {
                    this.setState({ loading: false })
                })
            })
        }

    }

    BackButton = () => {
        return <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
                source={require('../../../assets/backButton.png')}
                style={styles.image}
                onPress={() => this.props.navigation.goBack()}
            />
        </TouchableOpacity>
    }

    EmailAndPasswordForm = () => {
        return <View>
            <Text style={styles.fieldTitle}>Email</Text>
            <CutomeTextInput placeholder="youremail@mail.com" secure={false} onTextInputChange={(email) => this.setState({ email: email })} round />
            <Text style={styles.fieldTitle}>Password</Text>
            <CutomeTextInput placeholder="Enter password" secure={true} onTextInputChange={(text) => this.setState({ password: text })} round />
        </View>
    }
    HeaderTiltles = () => {
        return <View>
            <Text style={styles.Uppertext}>Hey there,</Text>
            <Text style={styles.Lowertext}>Log in to karam</Text>
        </View>
    }
    SocialMediaLoginForm = () => {
        return <View>
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
        </View>
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={gloable.container}>
                    <this.BackButton />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <this.HeaderTiltles />
                        <this.EmailAndPasswordForm />
                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                        {(this.state.loading) ? <ActivityIndicator
                            style={{ marginVertical: 50, }}
                            color={Colors.primary} size={30} /> :
                            <CutomeButton style={styles.btn} text="Log in" onPress={this.submitHandler} round />}
                        <Text style={styles.HintText}>Or Continue with Social Account</Text>
                        <this.SocialMediaLoginForm />
                        <View style={styles.HorizontalContainer}>
                            <Text style={styles.HintText}>Don't have an account?</Text>
                            <Text style={styles.ImportanText} onPress={() => this.props.navigation.navigate('Signup')}> Create Now</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    error: state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);