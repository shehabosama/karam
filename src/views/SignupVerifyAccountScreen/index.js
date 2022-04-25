import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,

} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import CutomeButton from '../../component/CustomeButton';
import { showMessage } from '../../utils/HelperFunctions';
import styles from './style';
class SignupVerifyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, input1: '', input2: '', input3: '', input4: '' };
        this.inputRef1 = React.createRef()
        this.inputRef2 = React.createRef()
        this.inputRef3 = React.createRef()
        this.inputRef4 = React.createRef()
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {
    }
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
                <Text style={styles.Uppertext}>Verify Account</Text>
                <Text style={styles.Lowertext}>Enter 4 digits code received on your email</Text>
            </View>
        );
    };
    InputForms = () => {
        return (
            <View style={styles.verifyFiledContainer}>
                <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                    <View >
                        <TextInput
                            autoFocus={true}
                            keyboardType={'numeric'}
                            style={gloable.VerfiyInput}
                            maxLength={1}
                            // value={}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            numberOfLines={1}
                            //returnKeyType="next"
                            onChangeText={(input1) => {
                                this.inputRef2.current.focus();
                                this.setState({ input1 });
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
                            style={gloable.VerfiyInput}
                            maxLength={1}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            numberOfLines={1}
                            // returnKeyType="next"
                            onChangeText={(input2) => {
                                this.inputRef3.current.focus();
                                this.setState({ input2 });
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
                            style={gloable.VerfiyInput}
                            maxLength={1}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            numberOfLines={1}
                            // returnKeyType="next"
                            onChangeText={(input3) => {
                                this.inputRef4.current.focus();
                                this.setState({ input3 });
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
                            style={gloable.VerfiyInput}
                            maxLength={1}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            numberOfLines={1}
                            // returnKeyType="next"
                            onChangeText={(input4) => {
                                this.setState({ input4 });
                            }}
                            ref={this.inputRef4}
                        />
                    </View>
                </View>
            </View>
        );
    };
    ResendForm = () => {
        return (
            <View style={styles.HorizontalContainer}>
                <Icon name="reload" size={15} color={Colors.primary} style={{ marginTop: 17 }} />
                <Text style={styles.HintText}>Resend Code</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={{flex:1 , backgroundColor:'#fff'}}>
                <View style={styles.container}>
                    <this.BackButton />
                    <ScrollView contentContainerStyle={styles.container}>
                        <this.HeaderTitleForm />
                        <this.InputForms />
                        <this.ResendForm />
                        <CutomeButton style={styles.btn} text="Verify" round onPress={() => { this.submitHandler() }} />
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
    // signIn: bindActionCreators(verfyAccount, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupVerifyAccount);