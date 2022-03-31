import React, { Component, useEffect, useState } from 'react';
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
    TextInput,
    SafeAreaView
} from 'react-native';
import { Colors, GET_CAUSES_DATA } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect, useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview'
import CauseCard from '../../component/CauseCard';

import ObjectiveCard from '../../component/ObjectiveCard';
import { showMessage } from '../../utils/HelperFunctions';
import { getCausesData, getObjectivesData, getPrefrencesData, updateObjectAndPref } from '../../actions/DataActions';
import store from '../../store';
import PreferenceCard from '../../component/PrefrencesCard';
import { GET_DATA } from '../../actions/types';

const Causes = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [offset, setOffset] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const dispatch = useDispatch();
  //  const DATA = useSelector((state) => state.dataReducer.data);

 
    useEffect(() => {
        
            getData();
        
    }, []);

    //  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const getData = () => {
    //     console.log(offset);
    //     if (!loading && !isListEnd) {
    //         console.log('getDataaaaaaaaaaa');
    //         setLoading(true);
            

    //         dispatch(getCausesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ',
    //             offset, async () => {
    //                 ToastAndroid.show(`${DATA.data}done`, ToastAndroid.LONG);
    //                 await delay(10000);
    //                 console.log(DATA);
    //                // setData(DATA)
    //                 if (DATA.data.length > 0) {
    //                     console.log("i get Dataaaaaaaaaaaaaaaaaaaa ,", DATA);
    //                     setOffset(offset + 1);
    //                     //After the response increasing the offset for the next API call.
                        
    //                         setDataSource([...dataSource, ...DATA.data]);
    //                         setLoading(false);
                        

    //                 } else {
    //                     console.log("i am coudn't get it ");
    //                     setIsListEnd(true);
    //                     setLoading(false);
    //                 }
    //             },
    //             () => { ToastAndroid.show('Somthing went wrong , please try again!', ToastAndroid.LONG) }
    //         ));

    //     }

    //     setIsFetching(false);



        console.log(offset);
        if (!loading && !isListEnd) {
            console.log('getData');
            setLoading(true);

            //Service to get the data from the server to render
            fetch(`${GET_CAUSES_DATA}?page=${offset}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ',
                    }
                })
                //Sending the currect offset with get request
                .then((response) => response.json())
                .then((responseJson) => {
                    //Successful response from the API Call
                    console.log(responseJson);
                    if (responseJson.data.length > 0) {
                        setOffset(offset + 1);
                        //After the response increasing the offset for the next API call.
                        setDataSource([...dataSource, ...responseJson.data]);
                        setLoading(false);

                    } else {
                        setIsListEnd(true);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        setIsFetching(false);
    };
    const onRefresh = () => {
        setIsFetching(true);
        getData();
    };
    const renderFooter = () => {
        return (
            //Footer View with Loader
            <View style={styles.footer}>
                {loading ? (
                    <ActivityIndicator color="black" style={{ margin: 15 }} />
                ) : null}
            </View>
        );
    };

    const getHeaderView = () => {
        return (
            <>
                <Text style={styles.Uppertext}>Causes</Text>
                <View style={{ flexDirection: 'row' }}>
                    <CardView
                        style={{ flex: 1, flexDirection: 'row', borderWidth: 2 }}
                        cardElevation={6}
                        cardMaxElevation={6}
                        cornerRadius={50}
                    >
                        <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon} onPress={() => { this.props.navigation.navigate('Login') }} />
                        <TextInput placeholder="Search cases , causes & providers" style={
                            {
                                flex: 1,
                                // borderBottomColor:Colors.placeHolder,
                            }
                        } />
                        <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
                    </CardView>
                </View>
            </>

        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList style={{ flex: 1, margin: 1 }}

                data={dataSource}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, margin: 2 }} >
                            <TouchableOpacity style={{ flex: 1, margin: 5 }} onPress={() => {
                                ToastAndroid.show(item.name, ToastAndroid.LONG);
                            }}>
                                <CauseCard

                                    name={item.name}
                                    imageUrl={item.image}
                                    description={item.description} />

                            </TouchableOpacity>


                        </View>

                    );
                }}
                bounces={false}
                keyExtractor={item => item.id}
                // refreshing={this.state.refresh}
                // ListEmptyComponent={this.ListEmptyComponent}
                //  onRefresh={this.onRefresh}
                ListHeaderComponent={getHeaderView}
                ListFooterComponent={renderFooter}
                onEndReached={getData}
                onEndReachedThreshold={0.5}
                onRefresh={onRefresh}
                refreshing={isFetching}
                progressViewOffset={100}
            />
        </SafeAreaView>
    );

}
// class Causes1 extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             isSelected: false,
//             data: [],
//             error: null,
//             pageNumber: 1,
//             offset: 1,
//             isListEnd: false,

//         };
//     }

//     async componentDidMount() {
//         await this.props.getCausesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ',
//             this.state.pageNumber);

//         if (this.props.data !== null) {
//             this.setState({ data: { ...this.props.data }, pageNumber: 2 });
//         } else {
//             this.setState({ error: this.props.error });
//         }
//         this.checkUser();
//         if (this.props.currentUser !== null) {
//             // this.setState({ loading: false })
//         } else if (this.props.error !== null) {
//             //  this.setState({ loading: false })
//         }



//     }



//     getData = () => {

//         console.log(this.state.offset);
//         if (!this.state.loading && !this.state.isListEnd) {
//             console.log('getData');
//             this.setState((prevState, props) => { return { loading: true } });
//             //Service to get the data from the server to render
//             fetch(`${GET_CAUSES_DATA}?page=${this.state.offset}`,
//                 {
//                     method: 'GET',
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json',
//                         'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ',
//                     }
//                 })
//                 //Sending the currect offset with get request
//                 .then((response) => response.json())
//                 .then((responseJson) => {
//                     //Successful response from the API Call
//                     console.log(responseJson);
//                     if (responseJson.data.length > 0) {
//                         this.setState((prevState, props) => { return { offset: this.state.offset + 1 } });
//                         //After the response increasing the offset for the next API call.
//                         let compinData = { ...this.state.data, ...responseJson.data };
//                         this.setState((prevState, props) => { return { data: compinData } });
//                         this.setState((prevState, props) => { return { loading: false } });
//                     } else {
//                         this.setState((prevState, props) => { return { isListEnd: true } });
//                         this.setState((prevState, props) => { return { loading: false } });
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         }
//     };


//     renderFooter = () => {
//         return (
//             //Footer View with Loader
//             <View style={styles.footer}>
//                 {this.state.loading ? (
//                     <ActivityIndicator color="black" style={{ margin: 15 }} />
//                 ) : null}
//             </View>
//         );
//     };



//     async onEndReached() {

//         await this.props.getCausesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ',
//             this.state.pageNumber);

//         if (this.props.data !== null) {
//             this.setState({ data: this.props.data, pageNumber: this.state.pageNumber + 1 });
//         } else {
//             this.setState({ error: this.props.error });
//         }
//         console.log("tessssssssssssssssst", this.state.pageNumber);

//     }
//     test() {
//         this.setState({ pageNumber: 1 })
//         console.log("test", this.state.pageNumber);

//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {

//         this.checkUser();
//         //  console.log('->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.state.ids, this.state.objectiveIdes, this.state.data);

//     }
//     componentWillUnmount() {
//         //  this.props.cleanError();

//     }

//     checkUser = async () => {
//         // if (this.props.currentUser) {
//         //     this.props.navigation.navigate('HomeTabs');
//         // }
//         // console.log(this.props.currentUser);


//     };



//     render() {
//         const getHeaderView = () => {
//             return (
//                 <>
//                     <Text style={styles.Uppertext}>Causes</Text>
//                     <View style={{ flexDirection: 'row' }}>
//                         <CardView
//                             style={{ flex: 1, flexDirection: 'row', borderWidth: 2 }}
//                             cardElevation={6}
//                             cardMaxElevation={6}
//                             cornerRadius={50}
//                         >
//                             <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon} onPress={() => { this.props.navigation.navigate('Login') }} />
//                             <TextInput placeholder="Search cases , causes & providers" style={
//                                 {
//                                     flex: 1,
//                                     // borderBottomColor:Colors.placeHolder,
//                                 }
//                             } />
//                             <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
//                         </CardView>
//                     </View>
//                 </>

//             );
//         }
//         return (
//             (this.state.data != null) ? <View style={styles.container}>

//                 <FlatList style={{ flex: 1, margin: 1 }}


//                     data={this.props.data.data}
//                     renderItem={({ item }) => {
//                         return (
//                             <View style={{ flex: 1, margin: 2 }} >
//                                 <TouchableOpacity style={{ flex: 1, margin: 5 }} onPress={() => {
//                                     ToastAndroid.show(item.name, ToastAndroid.LONG);
//                                 }}>
//                                     <CauseCard

//                                         name={item.name}
//                                         imageUrl={item.image}
//                                         description={item.description} />

//                                 </TouchableOpacity>


//                             </View>

//                         );
//                     }}
//                     bounces={false}
//                     keyExtractor={item => item.id}
//                     refreshing={this.state.refresh}
//                     ListEmptyComponent={this.ListEmptyComponent}
//                     onRefresh={this.onRefresh}
//                     ListHeaderComponent={getHeaderView}
//                     ListFooterComponent={this.renderFooter}
//                     onEndReached={this.getData}
//                     onEndReachedThreshold={0.5}


//                 />




//                 {/* <CauseCard style={styles.cusomBord} round /> */}

//             </View> : <ActivityIndicator style={{ flex: 1 }} size={40} />
//         );
//     }
// }
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
    }
    ,
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
    getCausesData: bindActionCreators(getCausesData, dispatch)
    // cleanError: bindActionCreators(cleanError, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Causes);
