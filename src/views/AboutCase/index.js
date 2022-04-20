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
class AboutCase extends Component {
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

    async componentDidMount() {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            this._getCaseData(json.access_token);
        }
    }
    _getCaseData = async (token) => {
        await this.props.getCaseData(token, this.props.route.params.id);
        if (this.props.data !== null) {
            this.setState({ data: this.props.data, loading: false })
        } else {
            this.setState({ error: this.props.error })
        }
    };
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }
    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };

    render() {
        return (
            (this.state.data !== null && this.state.loading === false) ?
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={styles.container}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require("../../../assets/backButton.png")}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <Text style={styles.Lowertext}># Water 2312</Text>
                            <Text style={styles.Uppertext}>{this.state.data.name}</Text>

                            <View style={{ flex: 1, }}>

                                <View style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity style={{ flex: 2 }}
                                        onPress={() => {

                                            this.setState({ aboutCaseTab: true, updatesCaseTab: false });
                                        }}>
                                        <Text style={this.state.aboutCaseTab ? styles.activeTab : styles.nonActiveTab}>
                                            Info
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flex: 2 }}
                                        onPress={() => {

                                            this.setState({ aboutCaseTab: false, updatesCaseTab: true });
                                        }}>
                                        <Text style={this.state.updatesCaseTab ? styles.activeTab : styles.nonActiveTab}>
                                            Updates
                                        </Text>
                                    </TouchableOpacity>

                                </View>



                                {this.state.aboutCaseTab ? <View style={{ flex: 1 }}>
                                    <CasesCardInfo imageUrl={IMAGES_URL + this.state.data.image} />

                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="home-outline" size={20} style={{ marginTop: 10 }} />
                                        <Text style={styles.NormalBoldText}>
                                            {this.state.data.location !== null ? this.state.data.location : "No Location"}
                                        </Text>

                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="location" size={20} style={{ marginTop: 3 }} />
                                        <Text style={styles.NormalText}>
                                            Fayoum , Egypt
                                        </Text>

                                    </View>

                                    <View >

                                        <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: '#E5E5E5', flexDirection: 'row', marginHorizontal: 30 }}>
                                            <View style={{   backgroundColor: '#335D5B', padding: 5, borderRadius: 10, flex: 0.8  }}>

                                            </View>
                                           
                                        </View>
                                        <View style={{flexDirection:'row' ,}}>
                                             <Text style={{flex:1,alignSelf:"center" , marginStart:120 , fontWeight:"bold" , fontSize:20 , color:Colors.primary}}>
                                                 53,581 EGP</Text>
                                       <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:15 , color:Colors.placeHolder,marginEnd:29}}>
                                           53,581 EGP</Text>

                                        </View>
                                      
                                    </View>
                                   

                                    <CustomeButton round text="Donate now" style={{marginTop:15}} onPress={()=>{
                                        this.props.navigation.navigate('SetDonationValue');
                                    }} />

                                </View> :
                                    <View style={{ flex: 1 }}>

                                        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                            <Icon name={
                                                (this.state.data.status === 1) ||
                                                    (this.state.data.status === 2) ||
                                                    (this.state.data.status === 3) ?
                                                    "ios-checkmark-circle" :
                                                    "ios-checkmark-circle-outline"}

                                                color={Colors.primary} size={20}
                                                style={{ marginTop: 5, marginEnd: 0 }}
                                            />

                                            <Text style={{ borderBottomColor: Colors.placeHolder, borderBottomWidth: 1, flex: 1, marginBottom: 15 }}></Text>
                                            <Icon name={(this.state.data.status === 2) || (this.state.data.status === 3) ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} color={Colors.primary} size={20} style={{ marginTop: 5, marginEnd: 0 }} />
                                            <Text style={{ borderBottomColor: Colors.placeHolder, borderBottomWidth: 1, flex: 1, marginBottom: 15 }}></Text>
                                            <Icon name={(this.state.data.status === 3) ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} color={Colors.primary} size={20} style={{ marginTop: 5, marginEnd: 0 }} />
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={{ marginBottom: 20 }}>Collected🎉</Text>
                                            <Text style={{ marginBottom: 20, marginStart: 70, marginEnd: 60 }}>Started🚀</Text>
                                            <Text style={{ marginBottom: 20, marginStart: 0 }}>Completed🏁</Text>
                                        </View>

                                        <Text style={{
                                            fontSize: 15,
                                            fontFamily: 'SF-Pro-Rounded-Regular',
                                            alignSelf: 'flex-start',
                                            color: Colors.blackText,
                                            marginHorizontal: 5,
                                            marginVertical: 5,
                                            fontWeight: 'bold'
                                        }}>Project Images</Text>

                                        <FlatList
                                            horizontal
                                            data={this.state.data.images}
                                            renderItem={({ item }) => {

                                                return (
                                                    <TouchableOpacity onPress={() => {
                                                        // ToastAndroid.show(item, ToastAndroid.LONG);
                                                    }}>
                                                        <View style={{ flex: 1, justifyContent: "center" }}>
                                                            <Image
                                                                // source={{
                                                                //     uri:`${IMAGES_URL+item}`
                                                                //     }} 
                                                                source={{

                                                                    uri: `${IMAGES_URL + item}`,

                                                                }}
                                                                style={{ flex: 1, width: 200, marginHorizontal: 5 }}
                                                                resizeMode="contain" />

                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            }}

                                            //  keyExtractor={}
                                            refreshing={this.state.refresh}
                                            ListEmptyComponent={this.ListEmptyComponent}
                                            onRefresh={this.onRefresh}
                                        />

                                        <Text style={{
                                            fontSize: 15,
                                            fontFamily: 'SF-Pro-Rounded-Regular',
                                            alignSelf: 'flex-start',
                                            color: Colors.blackText,
                                            marginHorizontal: 5,
                                            marginVertical: 10,
                                            fontWeight: 'bold'
                                        }}>Supporting Documents</Text>
                                        <CardView style={styles.card}
                                        cornerRadius={20}
                                        >
                                             <View style={{ flexDirection: 'row' }}>

                                            <Text style={{
                                                flex: 1,
                                                fontSize: 15,
                                                fontFamily: 'SF-Pro-Rounded-Regular',
                                                alignSelf: 'flex-start',
                                                color: Colors.blackText,
                                                marginHorizontal: 5,
                                                marginVertical: 5,

                                            }}>Water Pipes Receipt.jpg</Text>
                                            <Icon name="ios-eye-outline" size={20} style={{ marginTop: 5, marginEnd: 20 }} />

                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{
                                                flex: 1,
                                                fontSize: 15,
                                                fontFamily: 'SF-Pro-Rounded-Regular',
                                                alignSelf: 'flex-start',
                                                color: Colors.blackText,
                                                marginHorizontal: 5,
                                                marginVertical: 5,

                                            }}>Daily labor.pdf</Text>
                                            <Icon name="ios-eye-outline" size={20} style={{ marginTop: 5, marginEnd: 20 }} />

                                        </View>
                                        </CardView>
                                       
                                    </View>
                                }

                            </View>

                        </ScrollView>
                    </View>
                </View> : <ActivityIndicator animating style={{ flex: 1 }} size={40} />

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
        alignSelf: 'flex-start',
        color: Colors.primary,
        marginTop: 5,
    },
    Lowertext: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
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
)(AboutCase);