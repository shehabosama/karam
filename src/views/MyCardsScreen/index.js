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
import Icon from 'react-native-vector-icons/Ionicons';

class MyCardsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            // userPrefrences: this.props.route.params.userPrefrences,
            // userObjective: this.props.route.params.userObjective,
            donationGoal: '',
            error: '',
            selectedInterval: '',


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
                <Text style={styles.Uppertext}>My Cards</Text>
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
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Select Frequency' },
            { key: index++, label: 'Evry Year' },
            { key: index++, label: 'Every Month' },
            { key: index++, label: 'Every day', accessibilityLabel: 'Tap here for cranberries' },];
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={gloable.container}>
                    <this.BackButtonForm />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <this.HeaderTitleForm />

                        <ImageBackground
                            //source={require('../../assets/maketCardPhoto.png')}
                            source={require('../../../assets/cardBackground.png')}
                            style={{}}
                            imageStyle={{ height: 250, borderRadius: 10, resizeMode: 'contain' }}>
                            <ImageBackground source={require('../../../assets/wavesBackground.png')} imageStyle={{ height: 250, borderRadius: 10, resizeMode: 'contain',marginTop:10 }}>
                                <View style={{ flexDirection: 'row', marginHorizontal: 2, marginHorizontal: 30, marginTop: 30 }}>
                                    <Icon name="checkmark-circle-outline" size={20} color="#fff" style={{}} />
                                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', flex: 1 }}>Verified</Text>
                                    <Text style={{ fontSize: 13, color: "#fff", }}>Depit</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginHorizontal: 2, marginHorizontal: 40, marginTop: 85 }}>

                                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', flex: 1 }}>**** **** **** 0329</Text>
                                    <Text style={{ fontSize: 7, color: "#fff",marginTop:-7,marginHorizontal:5 }}>{`
        VALID
        THRU
      `}</Text>
                                    <Text style={{ fontSize: 13, color: "#fff", }}>03/24</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginHorizontal: 2, marginHorizontal: 40, marginTop: 20 }}>
                                    
                                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', flex: 1 ,marginTop:5 }}>SALMA LAKANY</Text>
                                    <Image source={require('../../../assets/visaLogo.png')}/>
                                </View>
                            </ImageBackground>
                        </ImageBackground>

                        <Text style={{ fontWeight: '800', marginTop: 40, fontSize: 15,color:Colors.primary }}>Previously used Cards</Text>


                        <View style={{ flexDirection: 'row', marginHorizontal: 2, }}>
                            <CardView
                                style={styles.BankCardView}
                                cornerRadius={15} >
                                <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                    <Image source={require('../../../assets/visa.png')} style={{ resizeMode: 'contain', height: 45, marginTop: 20, marginBottom: 10, marginHorizontal: 10 }} />
                                    <View style={{ flex: 1, marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: 15, marginTop: 10 }}>Salma Ahemd</Text>
                                        <Text style={{ fontSize: 15, }}>xxxx xxxx xxxx 8013</Text>
                                    </View>

                                    <View style={{ marginTop: 15, marginHorizontal: 15 }}>
                                        <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>253 SAR</Text>
                                        <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                            <Image source={require('../../../assets/statementIcon.png')} style={{ resizeMode: 'contain' }} />
                                            <Text style={{ fontSize: 10, marginStart: 5 }}>Statement</Text>
                                        </View>
                                    </View>
                                </View>
                            </CardView>
                        </View>




                        <View style={{ flexDirection: 'row', marginHorizontal: 2, }}>
                            <CardView
                                style={styles.BankCardView}
                                cornerRadius={15} >
                                <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                    <Image source={require('../../../assets/visa.png')} style={{ resizeMode: 'contain', height: 45, marginTop: 20, marginBottom: 10, marginHorizontal: 10 }} />
                                    <View style={{ flex: 1, marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: 15, marginTop: 10 }}>Salma Ahemd</Text>
                                        <Text style={{ fontSize: 15, }}>xxxx xxxx xxxx 8013</Text>
                                    </View>

                                    <View style={{ marginTop: 15, marginHorizontal: 15 }}>
                                        <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>253 SAR</Text>
                                        <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                            <Image source={require('../../../assets/statementIcon.png')} style={{ resizeMode: 'contain' }} />
                                            <Text style={{ fontSize: 10, marginStart: 5 }}>Statement</Text>
                                        </View>
                                    </View>
                                </View>
                            </CardView>
                        </View>

                      


                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Add Credit Card" round onPress={() => this.props.navigation.navigate('PaymentMethodFirstStage')} />}

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
)(MyCardsScreen);
