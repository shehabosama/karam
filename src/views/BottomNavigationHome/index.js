import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
    BackHandler,
    Alert,
    StatusBar,ImageBackground
} from 'react-native';
import { bindActionCreators } from 'redux';
import CutomeDonationMeter from '../../component/CustomeDonationMeterBord';
import CasesCard from '../../component/CasesCard';
import { connect } from 'react-redux';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import { logout } from '../../actions/AuthActions';
import { getHomeScreenData } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import ProviderCard from '../../component/ProviderCard';
import styles from './style';
import { Colors, IMAGES_URL } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null,
            error: '',
            cases: [],
            causes: [],
            providers: [],
            userName: '',
        };

    }
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            //this.setState({accoutnName:json.name})
            this.getHomeScreenData(json.access_token);
            this.setState({ userName: json.user_name })
        }
    }
    getHomeScreenData = async (token) => {
        await this.props.getHomeScreenData(token);
        if (this.props.data !== null) {
            this.setState({
                data: this.props.data,
                causes: this.props.data.causes,
                cases: this.props.data.cases,
                providers: this.props.data.providers,
                loading: false
            })
        } else {

            this.setState({ error: this.props.error })
        }
    };
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

    HeaderTitleForm = () => {
        let tmpArray = this.state.userName.split(' '); //split the name to an array

        const lastname = tmpArray.pop(); // pop the last element of the aray and store it in "lastname" variable
        const firstname = tmpArray.join(' '); // join the array to make first and middlename and store it in "firstname" variale

        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.props.logout() }} >
                    <Text style={styles.Uppertext}>Hello, {firstname}!</Text>
                </TouchableOpacity>
                <Icon name='search' size={20} color={Colors.blackText} style={styles.icon} />
                <Icon name='notifications-outline' size={20} color={Colors.primary} style={styles.icon} onPress={()=>{
                    this.props.navigation.navigate('NotificationScreen')
                }} />
            
            </View>

        );
    };
    CausesHeaderForm = () => {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                <Text style={{
                    flex: 1, fontSize: 17,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    marginTop: 7,
                    color: '#23596A',
                    fontWeight: 'bold',
                }}>Causes</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Causes')} >
                    <Text style={styles.HintSmallText}>View All</Text>
                </TouchableOpacity>
            </View>
        );
    };
    CasesHeaderForm = () => {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 10,marginTop: 10, }}>
                <Text style={{
                    flex: 1, fontSize: 17,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    marginTop: 7,
                    color: '#23596A',
                    fontWeight: 'bold',
                }}>Cases</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cases')} >
                    <Text style={styles.HintSmallText}>View All</Text>
                </TouchableOpacity>
            </View>
        );
    }
    ProvidersHeaderForm = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10 }}>
                <Text style={{
                    flex: 1, fontSize: 17,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    marginTop: 7,
                    color: '#23596A',
                    fontWeight: 'bold',
                }}>Providers</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Providers')} >
                    <Text style={styles.HintSmallText}>View All</Text>
                </TouchableOpacity>
            </View>
        );
    };
    CausesListForm = () => {
        return (
            <View style={styles.HorizontalContainer}>
                <FlatList

                    horizontal
                    data={this.state.causes}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{
                                marginEnd: 20, marginStart: 10
                                // paddingHorizontal: 2, ...(item.id !== 1 || item.id !== item.id == 4
                                //     ? { marginHorizontal: 16 } :
                                //     { marginEnd: 15 })
                            }}

                                onPress={() => {
                                    this.props.navigation.navigate('CauseScreen', { id: item.id });
                                }}>
                                <View >
                                    <CardView
                                        // style={styles.socialImage}
                                        style={styles.card}
                                        cardElevation={6}
                                        cardMaxElevation={6}
                                        cornerRadius={10}>
                                        <Image
                                            source={{ uri: `${IMAGES_URL}${item.image}` }}
                                            style={{
                                                width: 20,
                                                height: 25, marginHorizontal: 17 , marginVertical:10, alignSelf: "center"
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
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };
    ProvidersListForm = () => {
        return (
            <FlatList
                numColumns={3}
                initialNumToRender={6}
                data={this.state.providers}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {


                            this.props.navigation.navigate('ProviderScreen', { id: item.id });
                        }}>
                            <View >

                                <ProviderCard style={styles.cusomBord} round imageUrl={item.image} />
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id}
                refreshing={this.state.refresh}
                ListEmptyComponent={this.ListEmptyComponent}
                onRefresh={this.onRefresh}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        );
    };





    render() {
        const getHederView = () => {
            return (
                <View>
                    <this.HeaderTitleForm />
                    <CutomeDonationMeter style={styles.cusomBord} text="Set Goal" round />
                    <this.CausesHeaderForm />
                    <this.CausesListForm />
                    <this.CasesHeaderForm />
                </View>
            );
        }
        const getFoterView = () => {
            return (
                <>
                    <this.ProvidersHeaderForm />
                    <this.ProvidersListForm />
                </>
            );
        }
        const CustomStatusBar = (
            {
                backgroundColor,
                barStyle = "dark-content",
                //add more props StatusBar
            }
        ) => {

            const insets = useSafeAreaInsets();

            return (
                <View style={{ height: insets.top, backgroundColor }}>
                    <StatusBar
                        animated={true}
                        backgroundColor={backgroundColor}
                        barStyle={barStyle} />
                </View>
            );
        }

        return (
            (!this.state.loading) || (this.state.data !== null) ?
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <CustomStatusBar backgroundColor="white" />
                    <View style={styles.container}>
                        <FlatList

                            numColumns={2}
                            initialNumToRender={4}
                            data={this.state.cases}
                            renderItem={({ item }) => {
                                return (
                                    <View style={ styles.round } underlayColor="transparent">
                                    <Pressable onPress={()=>{
                                     this.props.navigation.navigate('AboutCase', { id: item.id });
                                }}>
                                    <ImageBackground
                              //  source={require('../assets/maketCardPhoto.png')}
                                source={{uri: `${IMAGES_URL+item.image}` }}
                                style={styles.bgContainer}
                                imageStyle={{ borderRadius: 10 }}>
                
                                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
                                    <Image style={{width:50 , height:60 ,  alignSelf: 'center' }} source={{uri: `${item.image}` }} />
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Ramaining</Text>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{item.remaining} EGP</Text>
                                </View>
                
                            </ImageBackground>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ flex: 1, color: '#000', marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ color: Colors.primary, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>85%</Text>
                            </View>
                                </Pressable>
                        </View>

                                    // <View style={{ marginHorizontal: 10 }}>
                                    //     < <Pressable style={{ flex: 1 }} onPress={() => {

                                    //         this.props.navigation.navigate('AboutCase', { id: item.id });
                                    //     }}>

                                    //         <CasesCard style={styles.cusomBord} round remainingText={item.remaining} imageUrl={item.image} name={item.name} />
                                    //     </ <Pressable>
                                    // </View>
                                );
                            }}
                            keyExtractor={item => item.id}
                            refreshing={this.state.refresh}
                            ListEmptyComponent={this.ListEmptyComponent}
                            onRefresh={this.onRefresh}
                            ListHeaderComponent={getHederView}
                            ListFooterComponent={getFoterView}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                </View>
                : (this.props.error === '' || !this.props.error) ? <View style={{ flex: 1 }}>
                    <ActivityIndicator animating style={{ flex: 1 }} size={40} />
                </View>
                    : <View>
                        <Text>{this.props.error}</Text>
                    </View>
        )
    }
}

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