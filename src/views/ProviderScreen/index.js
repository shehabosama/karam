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
import CardView from 'react-native-cardview'

import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import DonationCard from '../../component/DonationCard';
import { showMessage, validate } from '../../utils/HelperFunctions';
import CasesCard from '../../component/CasesCard';
class ProviderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false ,activeCaseTab:true, subscribeCaseTab:false, prevCaseTab:false};
    }

    componentDidMount() {
        this.checkUser();
        // if (this.props.currentUser !== null){
        //     this.setState({loading:false})
        // }else if(this.props.error !== null){
        //     this.setState({loading:false})
        // }
      
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

   

    render() {
 
        return (
            <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <CardView
                        style={{ flex: 1, flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20 }}
                        cardElevation={6}
                        cardMaxElevation={6}
                        cornerRadius={20} >
                        <View style={{ flex: 1, flexDirection: 'column', marginStart: 10 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    source={require("../../../assets/backButton.png")}
                                    style={styles.image}
                                  
                                />
                            </TouchableOpacity>
                            <Text style={styles.Uppertext}>Misr El Kheir Foudation</Text>
                            <Text style={styles.Lowertext}>Registration :415-208-907 </Text>
                        </View>

                        <View style={{ flexDirection: 'column', marginEnd: 30 }}>
                            <Image source={require('../../../assets/providerImage.png')} style={{ marginTop: 50, }} />
                            <Text style={styles.smalBoldText}>Info +</Text>
                        </View>
                    </CardView>
                </View>

                <View style={{ flex: 1, marginHorizontal: 30, }}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0.8, borderBottomColor: Colors.placeHolder }}>
                        <TouchableOpacity
                            onPress={() => {
                              
                                this.setState({activeCaseTab:true , subscribeCaseTab:false , prevCaseTab:false})
                            }}>
                            <Text style={this.state.activeCaseTab ? styles.activeTab : styles.nonActiveTab}>Active Cases</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                              
                                this.setState({activeCaseTab:false , subscribeCaseTab:true , prevCaseTab:false})
                            }}>
                            <Text style={this.state.subscribeCaseTab ? styles.activeTab : styles.nonActiveTab}>Subscribed </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                             
                                this.setState({activeCaseTab:false , subscribeCaseTab:false , prevCaseTab:true})
                            }}>
                            <Text style={this.state.prevCaseTab ? styles.activeTab : styles.nonActiveTab}>Previous Cases </Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AboutCase')}>
                        <CasesCard style={styles.cusomBord} round />
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
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

    smalBoldText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginEnd: 10
    },
    activeTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
    },
    nonActiveTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: Colors.placeHolder,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
    },
    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row'
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
)(ProviderScreen);