import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { Colors, IMAGES_URL } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { getProvidersByName } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import styles from './style';
class SearchProviders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            searchInput: '',
            data: null, error: '',
            ids: [],
            searchTimer: null
        };
    }

    async componentDidMount() {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            await this.props.getProvidersByName(json.access_token, '');
            if (this.props.data !== null) {
                this.setState({ loading: false, data: this.props.data })
            } else {
                this.setState({ error: this.props.error })
            }
        }

    }

    async fetchData(text) {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            await this.props.getProvidersByName(json.access_token, text);
            if (this.props.data !== null) {
                this.setState({ loading: false, data: this.props.data })
            } else {
                this.setState({ error: this.props.error })
            }
        }


    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {
        //  this.props.cleanError();

    }

    renderItem = ({ item, index }) => {
        return (

            <View style={{ marginVertical: 5 }}>
                <CardView
                    style={{ flex: 1, flexDirection: 'row', borderWidth: 2, padding: 10 }}
                    cardElevation={6}
                    cardMaxElevation={6}
                    cornerRadius={10}>
                    <Image
                        source={{ uri: `${IMAGES_URL}${item.image}` }}
                        style={{ height: 44, width: 35, margin: 10 }}
                    />
                    <View style={{ flexDirection: 'column', flex: 1, marginTop: 10 }}
                    >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginVertical: 5 }}>{item.name}</Text>
                        {/* <Text style={{ color: Colors.placeHolder }}>{item.description}{item.id}</Text> */}

                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 10, marginHorizontal: 5 }}
                    >


                    </View>
                </CardView>


            </View>
        );
    };
    getHederView = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Providers</Text>
                <View style={{ flexDirection: 'row' }}>
                    <CardView
                        style={{ flex: 1, flexDirection: 'row', borderWidth: 2 }}
                        cardElevation={6}
                        cardMaxElevation={6}
                        cornerRadius={50}>
                        <Icon name='search'
                            size={24}
                            color={Colors.placeHolder}
                            style={styles.icon}
                            onPress={() => { navigation.navigate('Login') }} />


                        <TextInput placeholder="Search cases , causes & providers" style={
                            {
                                flex: 1,
                                // borderBottomColor:Colors.placeHolder,
                            }}
                            onChangeText={(text) => {
                                if (this.state.searchTimer) {
                                    clearTimeout(this.state.searchTimer);
                                }

                                this.setState({ searchInput: text })
                                this.setState({ loading: true })
                                this.setState({ searchTimer: setTimeout(() => { this.fetchData(text); }, 2000), }

                                );
                            }}
                            value={this.state.searchInput}
                        />



                        <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
                    </CardView>
                </View>
            </View>
        );
    };

    render() {


        return (

            // <Text style={styles.Uppertext}>Select Objectives</Text>

            <View style={gloable.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image
                        source={require("../../../assets/backButton.png")}
                        style={styles.image}

                    />
                </TouchableOpacity>
                <this.getHederView />

                {(this.state.data != null && !this.state.loading) ? <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refresh}
                    ListEmptyComponent={this.ListEmptyComponent}
                    onRefresh={this.onRefresh}
                /> : <ActivityIndicator style={{ flex: 1 }} size={40} />}


            </View>

        );
    }
}

const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    getProvidersByName: bindActionCreators(getProvidersByName, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchProviders);
