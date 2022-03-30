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
import { showMessage, validate } from '../../utils/HelperFunctions';
class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, email: '', password: ''  , error:false };

    }

    componentDidMount() {
        this.checkUser();
        if (this.props.currentUser !== null){
            this.setState({loading:false})
        }else if(this.props.error !== null){
            this.setState({loading:false})
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
     
        
    };
    renderError = () => {
       // this.setState({error: this.props.error});
   
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
           
            this.setState({error:false});
            this.setState({ loading: true }, () => {
                this.props.signIn({ email: this.state.email, password: this.state.password }, this.props.navigation);
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 1000);
            })
          
        }
    }

    render() {
        return (

            <View style={styles.container}>
                
                <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require('../../../assets/backButton.png')}
                                style={styles.image}
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </TouchableOpacity>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <Text style={styles.Uppertext}>Hey there,</Text>
                            <Text style={styles.Lowertext}>Log in to karam</Text>
                            <Text style={styles.Lowertext}>Email</Text>
                            <CutomeTextInput placeholder="youremail@mail.com" secure={false} onTextInputChange={(email) => this.setState({ email: email })} round />
                            <Text style={styles.Lowertext}>Password</Text>
                            <CutomeTextInput placeholder="Enter password" secure={true} onTextInputChange={(text) => this.setState({ password: text })} round />
                            {(this.props.error == null)? <></>: this.renderError()}

                            {this.state.loading ? <ActivityIndicator style={{marginVertical: 50,}} color={Colors.primary} size={30} />:
                             <CutomeButton style={styles.btn} text="Log in" onPress={this.submitHandler} round />}

                            <Text style={styles.HintText}>Or Continue with Social Account</Text>

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
        color: Colors.placeHolder,
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
    renderError: {
        
        color: Colors.danger,
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
)(LoginScreen);