import React, { Component } from 'react';
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
import ObjectiveCard from '../../component/ObjectiveCard';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import { getObjectivesData } from '../../actions/DataActions';
import styles from './style';
class SignupObjectives extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, error: '', isSelected: false, data: null, ids: [] };
    }
    async componentDidMount() {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            //this.setState({accoutnName:json.name})
            this._getObjectivesData(json.access_token);
        }
       
    }
     _getObjectivesData = async(token)=>{
        await this.props.getObjectivesData(token);
        if (this.props.data !== undefined) {
            this.setState({ data: this.props.data })
            this.setState({ loading: false })
        }
        if (this.props.error !== '') {
            this.setState({ error: this.props.error })
            this.setState({ loading: false })
            
        }
     };
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {

    }
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
    HeaderTitleForm = ()=>{
        return(
            <View>
                <Text style={styles.Uppertext}>Select Objectives</Text>
                <Text style={styles.Lowertext}>Select as many, or as few, as you’d like</Text>
            </View>
        );
    };
    ObjectiveListForm = ()=>{
        return(
            <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                ToastAndroid.show(item.content, ToastAndroid.LONG);
                            }}>
                                <ObjectiveCard style={styles.ObjectiveCard} placeholder={item.content} round
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
        );
    };
    render() {
        return (
            (this.state.data !== null) ? <View style={styles.container}>
                <this.BackButtonForm />
                <this.HeaderTitleForm/>
                <this.ObjectiveListForm/>
                <CutomeButton style={styles.btn} text="Continue" round
                    onPress={() =>
                        this.props.navigation.navigate('SignupPreferences',
                            {
                                userObjecive: this.state.ids
                            })}/>
            </View>
                : (this.state.error !== '') ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: 10, }}>
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
    getObjectivesData: bindActionCreators(getObjectivesData, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupObjectives);
