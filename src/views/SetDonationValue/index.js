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
import styles from './style';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import gloable from '../../styles/gloable';
import { FlatList } from 'react-native-gesture-handler';
import CasesCardInfo from '../../component/CasesCardInfo';

import {
    RNPaymentSDKLibrary,
    PaymentSDKConfiguration,
    PaymentSDKBillingDetails,
    PaymentSDKTheme,
    PaymentSDKConstants,
} from '@paytabs/react-native-paytabs';
class DonationValueScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            // userPrefrences: this.props.route.params.userPrefrences,
            // userObjective: this.props.route.params.userObjective,
            donationGoal: '',
            donationGoalError: '',
            caseData: this.props.route.params.caseData,
        };
    }
    componentDidMount() {
        // this.props.cleanError();
    }
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }
   

    onPressPay() {
        let isNumber = !isNaN(+this.state.donationGoal);
       if(this.state.donationGoal ===''){
        this.setState({donationGoalError:'This field is required'})
       }else if(!isNumber){
        this.setState({donationGoalError:'This field accept only number'})
       }else{
        let configuration = new PaymentSDKConfiguration();
        configuration.profileID = '94870'
        configuration.serverKey = ''
        configuration.clientKey = ''
        configuration.cartID = "545454"
        configuration.currency = "EGP"
        configuration.cartDescription = "Flowers"
        configuration.merchantCountryCode = "EG"
        configuration.merchantName = "Flowers Store"
        configuration.amount = this.state.donationGoal
        configuration.screenTitle = "Pay with Card"

        let billingDetails = new PaymentSDKBillingDetails("Jone Smith",
            "email@domain.com",
            "97311111111",
            "Flat 1,Building 123, Road 2345",
            "Dubai",
            "Dubai",
            "AE",
            "1234")
        configuration.billingDetails = billingDetails

        let theme = new PaymentSDKTheme()
        //Prepare the resolved Image
        // -
        const merchantLogo = require('../../../assets/karam_logo.png');
        const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
        const resolvedMerchantLogo = resolveAssetSource(merchantLogo);
        theme.merchantLogo = resolvedMerchantLogo
        // //-
        //  theme.backgroundColor = "a83297"
        theme.secondaryColor = Colors.primary
        configuration.showBillingInfo = true
        configuration.theme = theme



        RNPaymentSDKLibrary.startCardPayment(JSON.stringify(configuration)).then(result => {
            if (result["PaymentDetails"] != null) {
                let paymentDetails = result["PaymentDetails"]
                console.log(paymentDetails)
            } else if (result["Event"] == "CancelPayment") {
                console.log("Cancel Payment Event")
            }
        }, function (error) {
            console.log(error)
        });
       }
       
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
                <Text style={styles.Uppertext}>Set Donation Goal</Text>
                <Text style={styles.Lowertext}>We’re going to help you reach your goal</Text>
            </View>
        );
    };
    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };
    InputFiled = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.input}
                    placeholder="8,000" keyboardType="numeric" value={this.state.donationGoal} placeholderTextColor={Colors.placeHolder} onChangeText={(donationGoal) =>{
                        this.setState({donationGoalError:''})
                        this.setState({ donationGoal: donationGoal })}} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/edit.png")} style={styles.editImage} />
                </TouchableOpacity>
            </View>
            {!!this.state.donationGoalError && (
                    <Text style={{ color: "red" }}>{this.state.donationGoalError}</Text>
                )}
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
                        <CasesCardInfo icon={IMAGES_URL + this.state.caseData.cause.image} text={this.state.caseData.remaining} imageUrl={IMAGES_URL + this.state.caseData.image} />
                        <this.InputFiled />
                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                        <Text style={styles.HintText}>Management and service fees of 5% will be deducted from payment to help Karam App manage donations</Text>

                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Donate now" round onPress={()=>this.onPressPay()} />}
                    {/* this.props.navigation.navigate('PaymentMethodFirstStage') */}

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
)(DonationValueScreen);
