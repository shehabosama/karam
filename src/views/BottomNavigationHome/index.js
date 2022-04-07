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
import { IMAGES_URL } from '../../constants';
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
            accountName: '',
        };

    }
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            //this.setState({accoutnName:json.name})
            this.getHomeScreenData(json.access_token);
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
        return (
            <TouchableOpacity onPress={() => { this.props.logout() }} >
                <Text style={styles.Uppertext}>Hello, {this.state.accountName}</Text>
            </TouchableOpacity>
        );
    };
    CausesHeaderForm = () => {
        return (
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
        );
    };
    CasesHeaderForm = () => {
        return (
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
        );
    }
    ProvidersHeaderForm = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{
                    flex: 1, fontSize: 17,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    marginTop: 10,
                    color: '#23596A',
                    fontWeight: 'bold',
                }}>Providers</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Providers')} >
                    <Text style={styles.HintText}>View All</Text>
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
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('CauseScreen', { id: item.id });
                            }}>
                                <View >
                                    <CardView
                                        style={styles.socialImage}
                                        cardElevation={6}
                                        cardMaxElevation={6}
                                        cornerRadius={10}>
                                        <Image
                                            // source={require("../../../assets/GreenwaterVector.png")}
                                            source={{ uri: `${IMAGES_URL}${item.image}` }}
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
                    <this.ProvidersHeaderForm/>
                    <this.ProvidersListForm />
                </>
            );
        }
        return (
            (!this.state.loading) || (this.state.data !== null) ? 
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    initialNumToRender={4}
                    data={this.state.cases}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }} >
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                   
                                    this.props.navigation.navigate('AboutCase', { id: item.id });
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