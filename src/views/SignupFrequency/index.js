import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CutomeButton from '../../component/CustomeButton';
import { showMessage } from '../../utils/HelperFunctions';
import SwitchSelector from 'react-native-switch-selector';
import styles from './style';
import gloable from '../../styles/gloable';
class SignupFrequency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            subscribeAmount: ''
        };
    }
    componentDidMount() { }
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }
    submiHandler = () => {
        let isNumber = !isNaN(+this.state.subscribeAmount);
        if (!isNumber) {
            showMessage('Please write only numbers');
        } else {
            this.props.navigation.navigate('Login')
        }
    };
    BackButtonForm = () => {
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
                <Text style={styles.Uppertext}>Set Frequency</Text>
                    <Text style={styles.Lowertext}>We’re going to help you reach your goal</Text>
            </View>
        );
    };
    InputFieldFrom = ()=>{
        return(
            <View style={{ flexDirection: 'row' }}>
            <TextInput style={styles.textInput}
                placeholder="8,000" placeholderTextColor={Colors.placeHolder} onChangeText={(subscribeAmount) => this.setState({ subscribeAmount: subscribeAmount })} />
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require("../../../assets/edit.png")}
                    style={styles.editIcon}
                />
            </TouchableOpacity>
        </View>
        );
    };
    render() {
        const options = [
            { label: 'Weekly', value: '1' },
            { label: 'Monthly', value: '1.5' },
            { label: 'Yearly', value: '2' }
        ];
        return (
            <View style={gloable.container}>
               <this.BackButtonForm/>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <this.HeaderTitleForm/>
                    <SwitchSelector style={{ marginTop: 30 }} options={options} initial={1} selectedColor='#fff' buttonColor={Colors.primary}
                        onPress={value => console.log(`Call onPress with value: ${value}`)} />
                    <this.InputFieldFrom/>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 10 }}>
                        <Text style={styles.BoldHintText}>800 EGP </Text>
                        <Text style={styles.HintText}>Left to reach your set target</Text>
                    </View>
                    <Text style={styles.HintText}>We will not charge you anything untill you subscribe to cases, causes or providers, or make a one time donations</Text>
                    <Text style={styles.BoldHintText}>OR </Text>
                    <CutomeButton style={styles.btnManualDonation} text="Manual Donation" round onPress={() => this.props.navigation.navigate('HomeTabs')} />
                    <Text style={styles.HintText}>Make donations case by case and keep track of your target achievement. You’ll get access to all the cases on the platform and updates.</Text>
                </ScrollView>
                <CutomeButton style={styles.customeButton} text="Confirm" round onPress={() => this.submiHandler()} />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    // cleanError: bindActionCreators(cleanError, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupFrequency);
