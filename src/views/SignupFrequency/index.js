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
    ToastAndroid,
    FlatList,TextInput
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import CutomeButton from '../../component/CustomeButton';
import ObjectiveCard from '../../component/ObjectiveCard';
import { showMessage } from '../../utils/HelperFunctions';
import SwitchSelector from 'react-native-switch-selector';
import PreferenceCard from '../../component/PrefrencesCard';
class SignupFrequency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            subscribeAmount:''
        };
    }

    

    async componentDidMount() {
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
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

        submiHandler = () => {
            let isNumber = !isNaN(+this.state.subscribeAmount);
            if (!isNumber) {
                showMessage('Please write only numbers');
            } else {
                this.props.navigation.navigate('Login')
            }
        };    

    render() {
      
        const options = [
            { label: 'Weekly', value: '1' },
            { label: 'Monthly', value: '1.5' },
            { label: 'Yearly', value: '2' }
        ];
        return (
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.backIcon}
                   
                />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Set Frequency</Text>
                <Text style={styles.Lowertext}>We’re going to help you reach your goal</Text>
                <SwitchSelector style={{ marginTop: 30 }} options={options} initial={1} selectedColor='#fff' buttonColor={Colors.primary}
                    onPress={value => console.log(`Call onPress with value: ${value}`)} />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.textInput}
                        placeholder="8,000" placeholderTextColor={Colors.placeHolder} onChangeText={(subscribeAmount) => this.setState({subscribeAmount: subscribeAmount})} />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require("../../../assets/edit.png")}
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>
                </View>
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
    //updateObjectAndPref: bindActionCreators(updateObjectAndPref, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    backIcon: {
        marginTop: 20,
        width: 25,
        height: 18,
        alignSelf: "flex-start",
    },
    editIcon: {
        marginTop: 20,
        width: 25,
        height: 28,
        alignSelf: "flex-start",
        marginEnd: 10,
        marginTop: 50,
        position: 'absolute',
        end: 0

    },

    textInput: {
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
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
        marginTop: 10,
    },
    HintText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
    },
    BoldHintText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    customeButton: {
        marginVertical: 40,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
    btnManualDonation: {
        marginTop: 50,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        padding: 5
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupFrequency);
