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
    Button
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
//import * as ImagePicker from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.
import gloable from '../../styles/gloable';
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons';
class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, resourcePath: {}, userName: '' };

    }
    selectFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, res => {

            console.log('Response = ', res);

            if (res.didCancel) {

                console.log('User cancelled image picker');

            } else if (res.error) {

                console.log('ImagePicker Error: ', res.error);

            } else if (res.customButton) {

                console.log('User tapped custom button: ', res.customButton);

                alert(res.customButton);

            } else {

                let source = res;
                console.log('source = ', source.assets);
                this.setState({
                    resourcePath: source.assets[0],
                });
            }
        });

    };



    async componentDidMount() {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            this.setState({ userName: json.user_name });
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



    render() {
        let tmpArray = this.state.userName.split(' '); //split the name to an array

        const lastname = tmpArray.pop(); // pop the last element of the aray and store it in "lastname" variable
        const firstname = tmpArray.join(' '); // join the array to make first and middlename and store it in "firstname" variale

        return (

            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={styles.container}>
                    <Icon name="settings-outline" size={24} color={Colors.primary} style={{marginTop:10}} onPress={() => { this.props.navigation.navigate('PersonalInformation') }}/>

                    <TouchableOpacity onPress={() => this.selectFile()}>
                        <Image
                            source={this.state.resourcePath.uri ? {

                                uri: this.state.resourcePath.uri,

                            } : require('../../../assets/profilePlaceHolder.png')
                            }
                            style={{ height: 81, width: 83, marginTop: 20, alignSelf: 'center', borderRadius: 50 }}

                        />



                        <Text style={styles.Uppertext}>Hey {firstname}!</Text>
                    </TouchableOpacity>


                    <Text style={styles.AccountText}>Account</Text>
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Preferred Causes</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />

                    </View>
                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Notification Settings</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />

                    </View>

                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />

                    <Text style={styles.Support}>Support</Text>
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Informaiton</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={styles.HorizontalContainer}>
                        <Text style={{ fontSize: 15, flex: 1, marginHorizontal: 5, marginVertical: 10, alignSelf: 'flex-start' }}>Personal Information</Text>
                        <Image
                            source={require("../../../assets/next.png")}
                            style={{ height: 20, width: 10, marginHorizontal: 5, marginVertical: 10, alignSelf: 'center', borderRadius: 50 }}

                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor:  '#eaeaea',
                            borderBottomWidth: 1,
                        }}
                    />
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
)(ProfileScreen);