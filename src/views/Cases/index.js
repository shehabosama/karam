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
    Dimensions,
    ToastAndroid,
    FlatList,
    TextInput
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview'
import CasesCard from '../../component/CasesCard';
import ObjectiveCard from '../../component/ObjectiveCard';
import { showMessage } from '../../utils/HelperFunctions';
import { getCasesData } from '../../actions/DataActions';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
class Cases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isSelected: false,
            data: null,
            error: null,
            searchText: '',
            pageNumber:1
        };


    }
   async onEndReached() {
        await this.props.getCasesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ' , this.state.pageNumber);
    }
    async componentDidMount() {
        await this.props.getCasesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ' , this.state.pageNumber);
        if (this.props.data !== null) {
            this.setState({ data: this.props.data , pageNumber:this.props.to })
        //    console.log("this is the data from the servvvvvvvvvvvvvvvvvvvver ::::::::" ,  this.state.data);
        }
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }



    }
    componentDidUpdate(prevProps, prevState, snapshot) {

     
        //this.checkUser();
        //  console.log('->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.state.ids, this.state.objectiveIdes, this.state.data);

    }
    componentWillUnmount() {
        //  this.props.cleanError();

    }

    checkUser = async () => {
        // if (this.props.currentUser) {
        //     this.props.navigation.navigate('HomeTabs');
        // }
        // console.log(this.props.currentUser);


    };

  
    
    handleSearchInput(e){
        let text = e.toLowerCase()
        let fullList = this.state.data;
        let filteredList = fullList.filter((item) => { // search from a full list, and not from a previous search results list
          if(item.name.toLowerCase().match(text))
            return item;
        })
        if (!text || text === '') {
          this.setState({
            data: this.props.data,
           // noData: false
          })
        } else if (!filteredList.length) {
         // set no data flag to true so as to render flatlist conditionally
           this.setState({
             noData: true
           })
        }
        else if (Array.isArray(filteredList)) {
          this.setState({
           // noData: false,
            data: filteredList
          })
        }
      }

      getHederView = () => {

        
        return (
            <View>
                <Text style={styles.Uppertext}>Cases</Text>
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
                        } }
                         onChangeText={(text)=>this.handleSearchInput(text)}  />



                        <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
                    </CardView>
                </View>
            </View>
        );
    };

    render() {

        return (
            (this.state.data !== null) ? <View style={styles.container}>

                <FlatList style={{ flex: 1, margin: 1 }}
                    numColumns={2}

                    data={this.state.data.data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, margin: 2 }} >
                                <TouchableOpacity style={{ flex: 1, margin: 5 }} onPress={() => {
                                    ToastAndroid.show(item.name, ToastAndroid.LONG);
                                    this.props.navigation.navigate('AboutCase');
                                }}>
                                    <CasesCard style={styles.cusomBord}
                                        round
                                        remainingText={item.remaining}
                                        imageUrl={item.image}
                                        name={item.name} />

                                </TouchableOpacity>


                            </View>

                        );
                    }}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refresh}
                    ListEmptyComponent={this.ListEmptyComponent}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.3}
                    onRefresh={this.onRefresh}
                    ListHeaderComponent={this.getHederView()}
                    ListFooterComponent={() => <><Text></Text></>}
                />


            </View> : <ActivityIndicator style={{ flex: 1 }} size={40} />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,

    },

    input: {
        borderBottomColor: Colors.primary,
        textAlign: 'center',
        borderStyle: 'solid',
        fontSize: 50,
        borderBottomWidth: 1.0,
        paddingBottom: 15,
        fontWeight: 'bold',
        flex: 1
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 15,

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
    icon: {
        marginTop: 10,
    },
});
const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    //  updateObjectAndPref: bindActionCreators(updateObjectAndPref, dispatch),
    getCasesData: bindActionCreators(getCasesData, dispatch)
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cases);
