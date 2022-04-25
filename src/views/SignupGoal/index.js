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
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CutomeButton from '../../component/CustomeButton';
import { cleanError, updateObjectAndPref } from '../../actions/DataActions';
import styles from './style';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import gloable from '../../styles/gloable';
import { FlatList } from 'react-native-gesture-handler';
class SignupGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            userPrefrences: this.props.route.params.userPrefrences,
            userObjective: this.props.route.params.userObjective,
            donationGoal: '',
            error: '',
        };
    }
    componentDidMount() {
        this.props.cleanError();
    }
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }
    submiHandler = async () => {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            //this.setState({accoutnName:json.name})
            this._updateObjectAndPref(json.access_token);
        }

    }
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
                        <this.InputFiled />
                        {(this.props.error === null) || (this.props.error === '') ? <></> : this.renderError()}
                        <Text style={styles.HintText}>Studies shows that committing to donating money ahead of time, can increase the amount you give by 32%</Text>

                       <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:15}}>
                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"1"})
                           }}>
                           <Text style={{fontSize:32}}>1</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"2"})
                           }}>
                           <Text style={{fontSize:32}}>2</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"3"})
                           }}>
                           <Text style={{fontSize:32}}>3</Text>
                           </TouchableOpacity>
                       </View>
                       
                       <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:15}}>
                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"4"})
                           }}>
                           <Text style={{fontSize:32}}>4</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"5"})
                           }}>
                           <Text style={{fontSize:32}}>5</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"6"})
                           }}>
                           <Text style={{fontSize:32}}>6</Text>
                           </TouchableOpacity>
                       </View>

                       <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:15}}>
                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"7"})
                           }}>
                           <Text style={{fontSize:32}}>7</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"8"})
                           }}>
                           <Text style={{fontSize:32}}>8</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"9"})
                           }}>
                           <Text style={{fontSize:32}}>9</Text>
                           </TouchableOpacity>
                       </View>
                           <View style={{flexDirection:'row' , justifyContent:"center" ,marginVertical:15}}>
                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal.includes(".")?this.state.donationGoal: this.state.donationGoal+"."})
                           }}>
                           <Text style={{fontSize:32}}>.</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal+"0"})
                           }}>
                           <Text style={{fontSize:32}}>0</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={{marginHorizontal:50 ,paddingHorizontal:8}} onPress={()=>{
                               this.setState({donationGoal:this.state.donationGoal.slice(0, -1)})
                           }}>
                           <Image style={{marginTop:15}} source={require('../../../assets/textRemover.png')}/>
                           </TouchableOpacity>
                       </View>
                       
                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{ marginVertical: 50, }} color={Colors.primary} size={30} /> :
                        <CutomeButton style={styles.btn} text="Set Goal" round onPress={() => this.submiHandler()} />}

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
    updateObjectAndPref: bindActionCreators(updateObjectAndPref, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupGoal);
