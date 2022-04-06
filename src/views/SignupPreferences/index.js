import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    ToastAndroid,
    FlatList
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CutomeButton from '../../component/CustomeButton';
import { getPrefrencesData, updateObjectAndPref } from '../../actions/DataActions';
import PreferenceCard from '../../component/PrefrencesCard';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import styles from './style';
class SignupPreferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isSelected: false,
            data: null,
            ids: [],
            error: '',
            objectiveIdes: this.props.route.params.userObjecive
        };
    }
    async componentDidMount() {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            //this.setState({accoutnName:json.name})
            this._getPrefrencesData(json.access_token);
        }

      
    }
    _getPrefrencesData = async(token)=>{
        await this.props.getPrefrencesData(token);
        if (this.props.data !== undefined) {
            this.setState({ data: this.props.data })
            this.setState({ loading: false })
        }
        if (this.props.error !== '') {
            this.setState({ error: this.props.error })
            this.setState({ loading: false })
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) { }
    componentWillUnmount() { }

    isChecked = (itemId) => {
        const isThere = this.state.ids.includes(itemId);
        return isThere;
    };
    toggleChecked = (itemId) => {
        const ids = [...this.state.ids, itemId];

        if (this.isChecked(itemId)) {
            this.setState({
                ...this.state,
                ids: this.state.ids.filter((id) => id !== itemId),
            });
        } else {
            this.setState({
                ...this.state,
                ids,
            });
        }
    };
    BackButtonForm = () => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                <Image
                    source={require("../../../assets/backButton.png")}
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    };

    HeaderTitleForm = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Donation Preference</Text>
                <Text style={styles.Lowertext}>Select all of causes you want</Text>
            </View>
        );
    };
    ObjectListForm = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 20, flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    ToastAndroid.show(item.title, ToastAndroid.LONG);
                                }}>

                                    <PreferenceCard style={styles.cusomBord} prefreenceTitle={item.title} round
                                        isSelected={this.isChecked(item.id)}
                                        setSelection={(value) => { this.toggleChecked(item.id) }} />
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.id}
                        refreshing={this.state.refresh}
                        ListEmptyComponent={this.ListEmptyComponent}
                        onRefresh={this.onRefresh}
                    />
                </View>
            </View>
        );
    };
    render() {
        return (
            (this.state.data != null) ? <View style={styles.container}>
                <this.BackButtonForm />
                <this.HeaderTitleForm />
                <this.ObjectListForm />
                <CutomeButton style={styles.btn} text="Continue" round onPress={() => {
                    this.props.navigation.navigate('SignupGoal',
                        {
                            userPrefrences: this.state.ids,
                            userObjective: this.state.objectiveIdes
                        }
                    )
                }} />
            </View> : (this.state.error !== '') ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: 10, }}>
                <Text style={{ textAlign: "center", fontWeight: 'bold' }}>{this.state.error}</Text>
            </View> : <ActivityIndicator style={{ flex: 1 }} size={40} />
        );
    }
}

const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    updateObjectAndPref: bindActionCreators(updateObjectAndPref, dispatch),
    getPrefrencesData: bindActionCreators(getPrefrencesData, dispatch)
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupPreferences);
