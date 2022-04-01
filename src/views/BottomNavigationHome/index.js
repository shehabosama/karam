import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    BackHandler,
    Alert,
    ToastAndroid
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import CutomeDonationMeter from '../../component/CustomeDonationMeterBord';
import CasesCard from '../../component/CasesCard';
import { connect } from 'react-redux';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import { logout } from '../../actions/AuthActions';
import { getHomeScreenData } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import ProviderCard from '../../component/ProviderCard';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, data: null, error: '' , cases:[] , causes:[] , providers:[] };

    }

    async componentDidMount() {
        //this.checkUser();
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);

        await this.props.getHomeScreenData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ');
        if (this.props.data !== null) {
            this.setState({ data: this.props.data ,
                causes:this.props.data.causes ,
                cases:this.props.data.cases,
                providers:this.props.data.providers,
                 loading: false })
           // console.log("dataaaaaaaaaaaa", this.props.data.causes);
        } else {
            console.log("dataaaaaaaaaaaa", this.props.error);
            this.setState({ error: this.props.error })
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        Alert.alert(
            'Confirm exit',
            'Do you want to exit App?',
            [
                { text: 'CANCEL', style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        BackHandler.exitApp()
                    }
                }
            ]
        );

        return true;
    }

    SomethingWentWrongText = () => {
        return (
            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Something went wrong!!</Text>
        );
    }
    checkUser = async () => {
        try {
            currentUser = await AsyncStorageProvider.getItem('currentUser');
            if (currentUser) {
                // this.props.autoLogin(JSON.parse(currentUser));
                const json = JSON.parse(currentUser);
                console.log(json.token_type);

            } else {

            }

        } catch (error) {

        }

    };

    render() {

        const getHederView = () => {
            return (
                <View>
                    <TouchableOpacity onPress={() => { this.props.logout() }} >
                        <Text style={styles.Uppertext}>Hello, Salma!</Text>
                    </TouchableOpacity>

                    <CutomeDonationMeter style={styles.cusomBord} text="Set Goal" round />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            flex: 1, fontSize: 17,
                            fontFamily: 'SF-Pro-Rounded-Regular',
                            marginTop: 10,
                            color: '#23596A',
                            fontWeight: 'bold',
                        }}>Causes</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Causes')} >
                            <Text style={styles.HintText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.HorizontalContainer}>
                        <FlatList
                            horizontal
                            data={this.state.causes}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        ToastAndroid.show(item.name, ToastAndroid.LONG);
                                    }}>
                                        <View >
                                            <CardView
                                                style={styles.socialImage}
                                                cardElevation={6}
                                                cardMaxElevation={6}
                                                cornerRadius={10}>
                                                <Image
                                                    // source={require("../../../assets/GreenwaterVector.png")}
                                                    source={{ uri: `http://192.168.1.7/karam/public/storage/${item.image}` }}
                                                    style={{
                                                        width: 29,
                                                        height: 33, margin: 10, alignSelf: "center"
                                                    }}
                                                />
                                            </CardView>
                                            <Text style={{ textAlign: "center" }}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={item => item.id}
                            refreshing={this.state.refresh}
                            ListEmptyComponent={this.ListEmptyComponent}
                            onRefresh={this.onRefresh}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            flex: 1, fontSize: 17,
                            fontFamily: 'SF-Pro-Rounded-Regular',
                            marginTop: 10,
                            color: '#23596A',
                            fontWeight: 'bold',
                        }}>Cases</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cases')} >
                            <Text style={styles.HintText}>View All</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        }

        const getFoterView = () => {
            return (
                <>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{
                            flex: 1, fontSize: 17,
                            fontFamily: 'SF-Pro-Rounded-Regular',
                            marginTop: 10,
                            color: '#23596A',
                            fontWeight: 'bold',
                        }}>Providers</Text>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Providers')} >
                            <Text style={styles.HintText}>View All</Text>
                        </TouchableOpacity>
                    </View>


                    <FlatList
                    numColumns={3}
                    initialNumToRender={6}
                           
                            data={this.state.providers}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        ToastAndroid.show(item.image, ToastAndroid.LONG);
                                     
                                        this.props.navigation.navigate('ProviderScreen' , {id:item.id});
                                    }}>
                                        <View >
                                            
                                        <ProviderCard  style={styles.cusomBord} round  imageUrl={item.image}/>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={item => item.id}
                            refreshing={this.state.refresh}
                            ListEmptyComponent={this.ListEmptyComponent}
                            onRefresh={this.onRefresh}
                        />



                    
                </>

            );
        }
       

       
        // if(typeof this.state.data.cases[0] !== 'undefined'
        //   && this.state.data.hasOwnProperty('cases')
        //   && this.state.data.cases.length > 0){
        //     //personId = tjanster.acf.person[0].ID;
        // }else{
        //     return;
        // }
        
        return (
            (!this.state.loading) || (this.state.data!==null) ? <View style={styles.container}>

                <FlatList
                    numColumns={2}
                    initialNumToRender={4}
                    data={this.state.cases}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }} >
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                    ToastAndroid.show(item.name, ToastAndroid.LONG);
                                    this.props.navigation.navigate('AboutCase' , {id:item.id});
                                }}>

                                    <CasesCard style={styles.cusomBord} round remainingText={item.remaining} imageUrl={item.image} name={item.name} />

                                </TouchableOpacity>
                            </View>

                        );
                    }}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refresh}
                    ListEmptyComponent={this.ListEmptyComponent}
                    onRefresh={this.onRefresh}
                    ListHeaderComponent={getHederView}
                    ListFooterComponent={getFoterView}
                />

            </View> 
            :(this.props.error === ''||!this.props.error)?<View style={{flex:1}}>
                <ActivityIndicator animating style={{ flex: 1 }} size={40} />
            </View>
            :<View>
                <Text>{this.props.error}</Text>
            </View>
            
                
           

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 15,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
        marginTop: 5
    },
    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row',
       


    },
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    socialImage: {
        width: 59,
        height: 63,
        marginHorizontal: 20,

    },
});
const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    logout: bindActionCreators(logout, dispatch),
    getHomeScreenData: bindActionCreators(getHomeScreenData, dispatch)
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);