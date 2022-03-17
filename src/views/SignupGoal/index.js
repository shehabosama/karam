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
    FlatList
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import CutomeButton from '../../component/CustomeButton';
import ObjectiveCard from '../../component/ObjectiveCard';
import { showMessage } from '../../utils/HelperFunctions';
import { getObjectivesData, getPrefrencesData } from '../../actions/DataActions';

import PreferenceCard from '../../component/PrefrencesCard';
class SignupGoal extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: false, isSelected: false,
             data: [{ "id": null, "order": null,"title":null ,  "image": null }], ids: []  ,
         objectiveIdes:this.props.route.params.userObjecive};
    }

    async componentDidMount() {
        await this.props.getPrefrencesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWM2MjQxOS0yNjMyLTQ3NDQtODRjNC1mNzA2OTM1Y2UyNTEiLCJqdGkiOiI2OGI4OTJiYWRkNDVlZGU0YzE5MGZmMDBjNTE0ZWZkMDFiMmJjZTNlOWE0N2UwOGQyOTNkNTBmMzEyYWRhYzczMzc0YWFkZmNiMmZjYjJlMSIsImlhdCI6MTY0NzEyODE2Ny45ODIxNjEsIm5iZiI6MTY0NzEyODE2Ny45ODIxNjQsImV4cCI6MTY3ODY2NDE2Ny45NzQzNDksInN1YiI6IjgiLCJzY29wZXMiOltdfQ.O1VHWZaZBe-A-J8_-svH2OKay87WGsLMYogWqUzYkx1JebIHHQKCqvV12QXqQfO8mgWY0NKwPuUekMMKHRFA4BMi_Q8Yj0QFDGmgJQyWf7manGvmGX3ZXyhG_ys63tXBHnOiRWeZWFhFnSTTvm5h2IduCJ8OpVK6ohdUE8OcvrAarYgeX-4O1-lfEGLzAp49SCbBTocsuySpwCMXW30Drp5om6OER9F9vwJKrc0Sg5uE_7r5I9ATX9cLWbw3OVGiExLF_oCFPf8jmZSIEHZ3WsDt1Ss1mABhUjVGId1dIWA55I4k775FNgI53aZhZwhdq3w4SF0w1HNEkmQlZOYNAolMipQGtm6X6apAp_V7D0vYPrg-Jogbm4fMdHK3ZyVs3Yr17_4YSFRPvG0ryjA5gNtppKKrwiy5nn3oxwb0gg1FQWYbFU8-6k87pl3o3ir4AZwgGYDy0wmauaiA1jimbEMNSt0YlYkPZAxWzYFKEBnFEFDvKUh1QMiGjCVzr1KWZiH23rR297QmfrrhD9mnXA5G41ZlcS5pBCyK_97V0VSIHuJMdHcBGKgIWYH2r8PiLT-pGYC3OM_E7ywxW3VM7C8et-PqeitlaJiPyI2r2Q0eeiIiRLxYe0qOiohUl_uuipZpofnURZ-fiaaM7uDJrS3VUk6WdEMsFf-gYtSm0_w');

        this.setState({ data: this.props.data })
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }



    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        this.checkUser();
        console.log('->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.state.ids , this.state.objectiveIdes, this.state.data);

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

    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()}
                />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Set Donation Goal</Text>
                <Text style={styles.Lowertext}>We’re going to help you reach your goal</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.input}
                        placeholder="8,000" keyboardType="numeric" value={donationGoal} placeholderTextColor={Colors.placeHolder} onChangeText={(donationGoal) => setDonationGoal(donationGoal)} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../../../assets/edit.png")} style={styles.editImage} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.HintText}>Studies shows that committing to donating money ahead of time, can increase the amount you give by 32%</Text>
            </ScrollView>

            <CutomeButton style={styles.btn} text="Set Goal" round onPress={() => submiHandler()} />

        </View>
        );
    }
}


const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
   // getPrefrencesData: bindActionCreators(getPrefrencesData, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    image: {
        marginTop: 20,
        width: 25,
        height: 18,
        alignSelf: "flex-start",
    },
    editImage: {

        marginTop: 20,
        width: 25,
        height: 28,
        alignSelf: "flex-start",
        marginEnd: 10,
        marginTop: 50,
        position: 'absolute',
        end: 0,
    },
    input: {
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
        width: 275,
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
        marginTop: 10,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
    },

    btn: {
        marginVertical: 50,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },

});



export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupGoal);