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

class SubscriptionScreen extends Component {
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
                       
                        <Text style={{ fontWeight: '800', marginTop: 10, fontSize: 15 }}>Bank Card</Text>

                        <View style={{ flexDirection: 'row', marginHorizontal: 2, }}>
                            <CardView
                                style={styles.BankCardView}
                                cornerRadius={15} >
                                <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                    <Image source={require('../../../assets/visa.png')} style={{ resizeMode: 'contain', height: 45, marginTop: 9, marginBottom: 10, marginHorizontal: 10 }} />
                                    <View style={{ flex: 1, marginTop: 10, marginBottom: 5, marginHorizontal: 10 }}>

                                        <Text style={{ fontSize: 15, marginTop: 10 }}>xxxx xxxx xxxx 8013</Text>
                                    </View>

                                    <View style={{ marginTop: 15, marginHorizontal: 15 }}>
                                        <Text style={{ fontSize: 10, marginTop: 10 }}>Changeee</Text>

                                    </View>
                                </View>
                            </CardView>
                        </View>


                        <Text style={{ fontWeight: '800', marginTop: 10, fontSize: 15 }}>Frequency</Text>



                        <View style={{ flexDirection: 'row', marginHorizontal: 2, }}>
                            <CardView
                                style={styles.BankCardView}
                                cornerRadius={15} >
                                <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                <Icon size={24} name="timer-outline" style={{ resizeMode: 'contain',  marginTop: 10,  marginHorizontal: 10 }} />

                                    <ModalSelector
                                        data={data}
                                        initValue="Select Frequency"
                                        supportedOrientations={['landscape']}
                                        accessible={true}
                                        scrollViewAccessibilityLabel={'Scrollable options'}
                                        cancelButtonAccessibilityLabel={'Cancel Button'}
                                        //  cancelText="close"
                                        // backdropPressToClose
                                        onChange={(option) => { this.setState({ selectedInterval: option.label }) }}>
                                   
                                        <TextInput
                                            style={{ borderColor: '#ccc', color:Colors.primary , fontWeight:'bold' }}
                                            editable={false}
                                            placeholder="Select Frequency"
                                            value={this.state.selectedInterval?this.state.selectedInterval:"Select Frequency"} />

                                    </ModalSelector>
                                </View>
                            </CardView>
                        </View>


                        <View >
                            <View style={{ flex: 1, marginTop: 10, borderRadius: 15,  padding: 10 }}>
                                
                                <Text style={{ flex: 1, fontSize: 25, fontWeight: '800', textAlign: 'center' }}>{this.state.donationGoal?this.state.donationGoal.replace(/^0+/, ''):"0"} EGP</Text>
                                <Text style={{ flex: 1, fontSize: 12, textAlign: 'center',color:Colors.primary }}>Total donations in 1 year = 12,000 EGP</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:5}}>
                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"1"})
                           }}>
                           <Text style={{fontSize:25}}>1</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"2"})
                           }}>
                           <Text style={{fontSize:25}}>2</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"3"})
                           }}>
                           <Text style={{fontSize:25}}>3</Text>
                           </TouchableOpacity>
                       </View>
                       
                       <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:5}}>
                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"4"})
                           }}>
                           <Text style={{fontSize:25}}>4</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"5"})
                           }}>
                           <Text style={{fontSize:25}}>5</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"6"})
                           }}>
                           <Text style={{fontSize:25}}>6</Text>
                           </TouchableOpacity>
                       </View>

                       <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:5}}>
                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"7"})
                           }}>
                           <Text style={{fontSize:25}}>7</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"8"})
                           }}>
                           <Text style={{fontSize:25}}>8</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"9"})
                           }}>
                           <Text style={{fontSize:25}}>9</Text>
                           </TouchableOpacity>
                       </View>
                           <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:5}}>
                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal.includes(".")?this.state.donationGoal: this.state.donationGoal+"."})
                           }}>
                           <Text style={{fontSize:25}}>  .</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"0"})
                           }}>
                           <Text style={{fontSize:25}}>0</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:35 ,}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal.slice(0, -1)})
                           }}>
                           <Image style={{marginTop:10}} source={require('../../../assets/textRemover.png')}/>
                           </TouchableOpacity>
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
)(SubscriptionScreen);
