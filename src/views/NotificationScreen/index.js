import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput, ImageBackground,
} from 'react-native';
import { Colors, IMAGES_URL } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CutomeButton from '../../component/CustomeButton';
import { cleanError, updateObjectAndPref } from '../../actions/DataActions';

import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import gloable from '../../styles/gloable';
import CasesCardInfo from '../../component/CasesCardInfo';
import styles from './style';
import CardView from 'react-native-cardview';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-gesture-handler';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            // userPrefrences: this.props.route.params.userPrefrences,
            // userObjective: this.props.route.params.userObjective,
            isEnabled: false


        };

    }
    componentDidMount() {
        // this.props.cleanError();
    }
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }
    // submiHandler = async () => {
    //     currentUser = await AsyncStorageProvider.getItem('currentUser');
    //     if (currentUser) {
    //         const json = JSON.parse(currentUser);
    //         //this.setState({accoutnName:json.name})
    //         this._updateObjectAndPref(json.access_token);
    //     }

    // }
    _updateObjectAndPref = async (token) => {
        this.props.cleanError();
        this.setState({ loading: true });
        await this.props.updateObjectAndPref({
            objecIds: this.state.userObjective, prefIds: this.state.userPrefrences, goal: this.state.donationGoal,
            token: token
        }
            , this.props.navigation, () => {//success
                this.setState({ loading: false });
            }, () => {//fail
                this.setState({ loading: false });
            });
    }
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
    getSelectedItem = (option) => {
        this.setState({ selectedInterval: option.label });
    }
    HeaderTitleForm = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Notifications</Text>
            </View>
        );
    };
    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };
    InputFiled = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.input}
                    placeholder="8,000" keyboardType="numeric" value={this.state.donationGoal} placeholderTextColor={Colors.placeHolder} onChangeText={(donationGoal) => this.setState({ donationGoal: donationGoal })} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/edit.png")} style={styles.editImage} />
                </TouchableOpacity>
            </View>
        );
    }


    render() {
        const toggleSwitch = () => this.setState({ isEnabled: this.state.isEnabled ? false : true });
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={gloable.container}>
                    <this.BackButtonForm />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <this.HeaderTitleForm />
                    
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>New Cases Available</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>Donated Cases Updates</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>Subscription Transaction</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>Case Donation Completed</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>Case Execution Completed </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>New Cases Available</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={
                            { borderBottomColor: Colors.placeHolder, borderBottomWidth: 0.2, marginTop: 30 }
                        } />
                        <View style={{ flexDirection: 'row', marginTop: 30, }}>
                            <Text style={{ flex: 1, color: Colors.primary, fontSize: 17 }}>Mute All Notifications</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Save Preferences" round onPress={() => this.props.navigation.navigate('PaymentMethodFirstStage')} />}

                </View>
            </View>

        );
    }
}

const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    //  updateObjectAndPref: bindActionCreators(updateObjectAndPref, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationScreen);
