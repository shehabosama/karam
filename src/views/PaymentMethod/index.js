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
class PaymentMethod extends Component {
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
                <Text style={styles.Uppertext}>Payment Method</Text>
                <Text style={styles.Lowertext}>Please select payment method to process your donation</Text>
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
                        <View >
                            <View style={{ flex: 1, marginTop: 10, borderRadius: 15, backgroundColor: '#F8F8F8', padding: 10 }}>
                                <Text style={{ flex: 1, fontSize: 20, textAlign: 'center' }}>Total Donation</Text>
                                <Text style={{ flex: 1, fontSize: 25, fontWeight: '800', textAlign: 'center' }}>8000 EGP</Text>
                            </View>
                        </View>
                        <Text style={{ fontWeight: '800', marginTop: 10, fontSize: 15 }}>Select Card</Text>

                        <View style={{ flexDirection: 'row', borderRadius: 20, backgroundColor: '#F8F8F8', borderWidth: 1, borderColor: Colors.primary }}>
                            <Image source={require('../../../assets/visa.png')} style={{ resizeMode: 'contain', height: 45, marginTop: 9, marginBottom: 10, marginHorizontal: 10 }} />
                            <View style={{ flex: 1, marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
                                <Text style={{ fontSize: 15 }}>Salma Ahmed</Text>
                                <Text style={{ fontSize: 15, }}>xxxx xxxx xxxx 8013</Text>
                            </View>

                            <View style={{ marginTop: 15, marginHorizontal: 15 }}>
                                <Text style={{ fontSize: 10 }}>Expiry</Text>
                                <Text style={{ fontSize: 10, }}>12/24</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 2 , }} onPress={() => this.props.navigation.navigate('AddNewPaymentMethod')}>
                            <CardView
                                //style={{ flex: 1, flexDirection: 'row', paddingVertical: 5 }}
                                style={styles.card}
                                cornerRadius={15}
                            >
                                <View style={{flex:1 , flexDirection:'row' , justifyContent:'center'}}>
                                     <Icon name='add-circle-outline' size={20} color={Colors.placeHolder} style={{marginTop:5}} />

                                <Text style={
                                    {
                                        marginTop: 5,
                                        
                                        color: Colors.primary,
                                        fontWeight:'800'
                                        // borderBottomColor:Colors.placeHolder,
                                    }
                                } >Add New Card</Text>
                                </View>
                               


                               


                            </CardView>
                        </TouchableOpacity>

                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Pay Now" round onPress={() => this.props.navigation.navigate('PaymentMethodFirstStage')} />}

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
)(PaymentMethod);
