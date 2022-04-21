import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
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
import Icon from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
class WalletScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            // userPrefrences: this.props.route.params.userPrefrences,
            // userObjective: this.props.route.params.userObjective,
            donationGoal: '',
            error: '',
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
    HeaderTitleForm = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Your Wallet</Text>
                <Text style={styles.Lowertext}>You can manage your subscription and donation que</Text>
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

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={gloable.container}>
                    <this.BackButtonForm />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <this.HeaderTitleForm />

                        <Pressable onPress={() => { this.props.navigation.navigate('SubscriptionScreen')}}>
                            <View >
                                <View style={{ flex: 1, marginTop: 10, borderRadius: 15, backgroundColor: '#F8F8F8', padding: 10, alignItems: 'center' }}>
                                    <Image source={require('../../../assets/subscription.png')} />
                                    <Text style={{ flex: 1, fontSize: 25, fontWeight: '800', textAlign: 'center' }}>Subscription</Text>
                                    <Text style={{ flex: 1, fontSize: 15, textAlign: 'center' }}>Manage your subscription prefrences
                                        (Payment, frequency)</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => { this.props.navigation.navigate('Donations')}}>
                            <View >
                                <View style={{ flex: 1, marginTop: 10, borderRadius: 15, backgroundColor: '#F8F8F8', padding: 10, alignItems: 'center' }}>
                                    <Image source={require('../../../assets/donationQue.png')} />
                                    <Text style={{ flex: 1, fontSize: 25, fontWeight: '800', textAlign: 'center' }}>Donation Que</Text>
                                    <Text style={{ flex: 1, fontSize: 15, textAlign: 'center' }}>View and edit cases selected for your subscription fund</Text>
                                </View>
                            </View>
                        </Pressable>
                    </ScrollView>


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
)(WalletScreen);
