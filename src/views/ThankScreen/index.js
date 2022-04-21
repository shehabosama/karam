import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image, Dimensions,
    FlatList,
} from 'react-native';
import { Colors, IMAGES_URL } from '../../constants';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import CasesCardInfo from '../../component/CasesCardInfo';
import { getCaseData } from '../../actions/DataActions';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import CustomeButton from '../../component/CustomeButton';
import CardView from 'react-native-cardview';
import CutomeButton from '../../component/CustomeButton';
class ThankScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            aboutCaseTab: true,
            updatesCaseTab: false,
            data: null,
            error: null,
            value: 0.5
        };

    }

     componentDidMount() {
       
    }
   
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }
    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };

    render() {
        return (
           
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={styles.container}>

                       
                        <ScrollView contentContainerStyle={{ flexGrow: 1,justifyContent:"center" }}>
                         
                            <Text style={styles.Uppertext}>Thank you!</Text>
                            <Text style={styles.Lowertext}>We’ve successfully received your donations</Text>
                            <Image source={require('../../../assets/smileIcon.png')} 
                            style={{alignSelf:'center',marginTop:20  ,resizeMode:'contain'}} />
                                             

                        </ScrollView>
                        <CutomeButton style={styles.btn} text="Go To Donations" round onPress={() => this.props.navigation.navigate('HomeTabs')} />
                    </View>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginHorizontal: 20,
        marginTop: 20
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.primary,
        marginTop: 5,
        justifyContent:'center',
       
    },
    Lowertext: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.primary,
        textAlign: 'justify',
        marginTop: 10,
     
    },
    NormalBoldText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.blackText,
        marginHorizontal: 5,
        marginVertical: 0,
        fontWeight: 'bold'
    },

    NormalText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.blackText,
        marginHorizontal: 2,
    },
    SmallText: {
        fontSize: 10,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.whiteText,

    },
    activeTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        borderBottomColor:Colors.primary,
        borderBottomWidth:2,
        textAlign: 'center',

    },
    nonActiveTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: Colors.placeHolder,
        fontWeight: 'bold',
        textAlign: 'center',



    },
    btn: {
        marginBottom: 5,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
    card: {
        marginVertical:4,
       
        
        backgroundColor: '#fff',
        ...Platform.select({
          android: {
            elevation: 5,
           borderWidth: 2 ,
          
          },
          ios: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
              
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            borderWidth: 2 ,
           
          },
        }),
      },
});


const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    getCaseData: bindActionCreators(getCaseData, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ThankScreen);