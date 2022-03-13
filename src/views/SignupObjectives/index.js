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
    TextInput,

} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import CutomeButton from '../../component/CustomeButton';
import ObjectiveCard from '../../component/ObjectiveCard';
import { showMessage } from '../../utils/HelperFunctions';


class SignupVerifyAccount extends Component
{

    constructor(props) {
        super(props);
        this.state = { loading: false,isSelected:false };
   
    }

    componentDidMount() {
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkUser();
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


    render() {
        return (
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

                    <Text style={styles.Uppertext}>Select Objectives</Text>
                    <Text style={styles.Lowertext}>Select as many, or as few, as you’d like</Text>

                    <ObjectiveCard style={styles.ObjectiveCard} placeholder="Automate your giving" round isSelected={this.state.isSelected} 
                    setSelection={(value)=>this.setState({isSelected:value})} />
                 

                </ScrollView>
                <CutomeButton style={styles.btn} text="Continue" round
                //  onPress={() => this.props.navigation.navigate('SignupPreferences',
                //     {
                //         userData: route.params,
                //         userObjecive: {
                //             isSelected1: isSelected1,
                //             isSelected2: isSelected2,
                //             isSelected3: isSelected3,
                //             isSelected4: isSelected4,
                //         }
                //     })}
                     />


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
    ImportanText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.importanText,
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
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    socialImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    ObjectiveCard: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primary
    }
});

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    error: state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    // signIn: bindActionCreators(signIn, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupVerifyAccount);
