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
    TextInput,
    ToastAndroid,
    FlatList
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { getCasesByName, } from '../../actions/DataActions';
import CardView from 'react-native-cardview';
import CasesCard from '../../component/CasesCard';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import styles from './style';
class SearchCases extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false,
             isSelected: false ,
             searchInput:'',
              data: null,error:'',
               ids: [],
               searchTimer:null
             };
    }

    async componentDidMount() {
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            this._getCasesByName(json.access_token ,'');
        }


    }
    _getCasesByName = async(token , text)=>{
        await this.props.getCasesByName(token,text);
        if(this.props.data !==null){
            this.setState({loading:false, data: this.props.data }) 
        }else{
            this.setState({ error: this.props.error }) 
        }
    };
    async fetchData(text){
        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            await this.props.getCasesByName(json.access_token,text);
        if(this.props.data !==null){
            this.setState({loading:false, data: this.props.data }) 
        }else{
            this.setState({ error: this.props.error }) 
        }
        }    
    }
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentWillUnmount() { }

    renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, margin: 2 }} >
            <TouchableOpacity style={{ flex: 1, margin: 5 }} onPress={() => {
                ToastAndroid.show(item.name, ToastAndroid.LONG);
                this.props.navigation.navigate('AboutCase');
            }}>
                <CasesCard 
                    round
                    remainingText={item.remaining}
                    imageUrl={item.image}
                    name={item.name} />
            </TouchableOpacity>
        </View>
        );
      };
    getHederView = () => {
        return (
            <View>
                <Text style={styles.Uppertext}>Cases</Text>
                <View style={{ flexDirection: 'row' }}>
                    <CardView
                        style={styles.card}
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
                            height:35
                            // borderBottomColor:Colors.placeHolder,
                        } }
                        onChangeText={(text) => {
                            if (this.state.searchTimer) {
                                clearTimeout(this.state.searchTimer);
                            }
                           
                            this.setState({searchInput:text})
                            this.setState({loading:true})
                            this.setState({searchTimer: setTimeout(() => { this.fetchData(text);}, 2000),}
                               
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
    ListEmptyComponent = ()=>{
        return(
            <Text style={{flex:1}}>theres no Data search to find more</Text>
        );
    };
    render() {
        return (
            // <Text style={styles.Uppertext}>Select Objectives</Text>
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={gloable.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image
                        source={require("../../../assets/backButton.png")}
                        style={styles.image}
                       
                    />
                </TouchableOpacity>
                      <this.getHederView/>

                      {(this.state.data != null && !this.state.loading)?
                       <FlatList
                       numColumns={2}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refresh}
                    ListEmptyComponent={this.ListEmptyComponent}
                    onRefresh={this.onRefresh}
                />: <ActivityIndicator style={{ flex: 1 }} size={40} />}
              

            </View>
            </View>
          
                
        );
    }
}

const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    getCasesByName: bindActionCreators(getCasesByName, dispatch),
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchCases);
