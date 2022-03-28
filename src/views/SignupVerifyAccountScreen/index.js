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
    Dimensions,
    TextInput,

} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import CutomeButton from '../../component/CustomeButton';
import { showMessage } from '../../utils/HelperFunctions';


class SignupVerifyAccount extends Component {


    constructor(props) {
        super(props);
        this.state = { loading: false, input1:'' , input2:'' , input3: '' , input4:'' };
        this.inputRef1 = React.createRef()
        this.inputRef2 = React.createRef()
        this.inputRef3 = React.createRef()
        this.inputRef4 = React.createRef()
        
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
        this.checkUser();
    }
    componentWillUnmount() {
      //  this.props.cleanError();
        
    }
    checkUser = async () => {
        // if (this.props.currentUser) {
        //     this.props.navigation.navigate('HomeTabs');
        // }
       // console.log(this.props.currentUser);
     
        
    };


     submitHandler = () => {
        let isNumber = !isNaN(+this.state.input1 + this.state.input2 + this.state.input3 + this.state.input4);
        if (this.state.input1.trim() == '' || this.state.input2.trim() == '' || this.state.input3.trim() == '' || this.state.input4.trim() == '') {
            showMessage('Please fill all verification fields');
        } else if (!isNumber) {
            showMessage('Please write only numbers');
        } else {
            this.props.navigation.navigate('SignupObjectives');
        }
    };
    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.Uppertext}>Verify Account</Text>
                <Text style={styles.Lowertext}>Enter 4 digits code received on your email</Text>
                <View style={styles.verifyFiledContainer}>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                
                                autoFocus={true}
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                // value={}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                //returnKeyType="next"
                                onChangeText={(input1) => {
                                    this.inputRef2.current.focus();
                                    this.setState({input1});
                                }}
                                ref={this.inputRef1}
                            />
                        </View>
                    </View>

                    <Text style={styles.spreatedDash}>_</Text>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                // returnKeyType="next"
                                onChangeText={(input2) => {
                                    this.inputRef3.current.focus();
                                    this.setState({input2});
                                }}
                                ref={this.inputRef2}
                            />
                        </View>
                    </View>
                    <Text style={styles.spreatedDash}>_</Text>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                // returnKeyType="next"
                                onChangeText={(input3) => {
                                    this.inputRef4.current.focus();
                                    this.setState({input3});
                                }}
                                ref={this.inputRef3}
                            />
                        </View>
                    </View>
                    <Text style={styles.spreatedDash}>_</Text>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                // returnKeyType="next"
                                onChangeText={(input4) => {
                                    this.setState({input4});
                                }}
                                ref={this.inputRef4}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.HorizontalContainer}>
                    <Icon name="reload" size={15} color={Colors.primary} style={{ marginTop: 19 }} />
                    <Text style={styles.HintText}>Resend Code</Text>
                </View>
                <CutomeButton style={styles.btn} text="Verify" round onPress={() => { this.submitHandler() }} />
            </ScrollView>
         
        </View>  
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.height,
        marginHorizontal: 15,
        marginTop: 20



    },
    verifyFiledContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 80,
    },

    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: Colors.primary,
        marginTop: 5,

    },
    spreatedDash: {
        fontSize: 20,
        fontFamily: 'SFProDisplay-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 5,
        marginHorizontal: 1,
        fontWeight: 'bold'
    },
    Lowertext: {

        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: Colors.primary,
        textAlign: 'justify',
        marginTop: 10,

    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        //alignSelf: 'flex-end',
        color: Colors.primary,
        marginHorizontal: 5,
        marginVertical: 10,

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
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 25,
    },
    round: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#23596A',
        marginHorizontal: 10,
        paddingHorizontal: 10
    }
});

const mapStateToProps = state =>({
    currentUser: state.auth.currentUser,
    error:state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    // signIn: bindActionCreators(signIn, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupVerifyAccount);