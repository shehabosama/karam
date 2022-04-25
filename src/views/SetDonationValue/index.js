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
class DonationValueScreen extends Component {
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
                        <CasesCardInfo imageUrl={IMAGES_URL + 'cases\\March2022\\PmwCah6DTJccJ1O445iH.jpg'} />
                        <this.InputFiled />
                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                        <Text style={styles.HintText}>Management and service fees of 5% will be deducted from payment to help Karam App manage donations</Text>
                       
                    
                       
                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Set Goal" round onPress={()=>this.props.navigation.navigate('PaymentMethodFirstStage')} />}

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
