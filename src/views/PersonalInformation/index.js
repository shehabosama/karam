import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import DonationCard from '../../component/DonationCard';
import { showMessage, validate } from '../../utils/HelperFunctions';
class PersonalInformation extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false ,fullName:'' ,mobileNumber:'',nationality:'',isSelected:''};
    }

    componentDidMount() {
        this.checkUser();
        if (this.props.currentUser !== null){
            this.setState({loading:false})
        }else if(this.props.error !== null){
            this.setState({loading:false})
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

   
     
      
       submitHandler = () => {
        let isNumber = !isNaN(+mobileNumber);
          if (fullName.trim() == '') {
              showMessage('Full Name is required!');
          } else if (mobileNumber.trim() == '') {
              showMessage('Mobile number is required!');
          } else if (nationality.trim() == '') {
              showMessage('Nationality is required!');
          } else if (!isSelected) {
              showMessage('You have to Agree Terms and Conditions');
          } else if (mobileNumber.length < 11) {
              showMessage('No phone number less than eleven numbers');
          }else if(!isNumber){
              showMessage('Please write only numbers in phone number');
          } else {
              this.props.navigation.navigate('SignupVerifyAccount',
                  {
                      email: route.params.email,
                      password: route.params.password,
                      fullName: fullName,
                      mobileNumber: mobileNumber,
                      nationality: nationality,
                      isSelected: isSelected
                  });
          }
      };

    render() {
 
        return (
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.image}
                />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <Text style={styles.Uppertext}>Personal Information</Text>
           
                <Text style={styles.Lowertext}>Full Name</Text>
                <CutomeTextInput placeholder="Your name" round onTextInputChange={(fullName) => this.setState({fullName:fullName})} />
                <Text style={styles.Lowertext}>Mobile</Text>
                <CutomeTextInput  type="numeric" placeholder="Your mobile number" round onTextInputChange={(mobileNumber) => this.setState({mobileNumber:mobileNumber})} />
                <Text style={styles.Lowertext}>Nationality</Text>
                <CutomeTextInput placeholder="Your nationality" round onTextInputChange={(nationality) => this.setState({nationality:nationality})} />
                <Text style={styles.Lowertext}>Email</Text>
                <CutomeTextInput placeholder="yourEmail" round onTextInputChange={(nationality) => this.setState({nationality:nationality})} />

                {/* <CutomeButton style={styles.btn} text="Continue" round onPress={submitHandler} /> */}

            </ScrollView>
        </View>
        );
    }
}




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
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
   
});

const mapStateToProps = state =>({
    currentUser: state.auth.currentUser,
    error:state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonalInformation);