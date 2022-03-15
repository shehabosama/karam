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
    FlatList
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import gloable from '../../styles/gloable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import CutomeButton from '../../component/CustomeButton';
import ObjectiveCard from '../../component/ObjectiveCard';
import { showMessage } from '../../utils/HelperFunctions';
import { getObjectivesData } from '../../actions/DataActions';


class SignupObjectives extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: false, isSelected: false, data: [{ "content": null, "id": null, "order": null }], ids: [] };


    }

    async componentDidMount() {
        await this.props.getObjectivesData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWM2MjQxOS0yNjMyLTQ3NDQtODRjNC1mNzA2OTM1Y2UyNTEiLCJqdGkiOiI2OGI4OTJiYWRkNDVlZGU0YzE5MGZmMDBjNTE0ZWZkMDFiMmJjZTNlOWE0N2UwOGQyOTNkNTBmMzEyYWRhYzczMzc0YWFkZmNiMmZjYjJlMSIsImlhdCI6MTY0NzEyODE2Ny45ODIxNjEsIm5iZiI6MTY0NzEyODE2Ny45ODIxNjQsImV4cCI6MTY3ODY2NDE2Ny45NzQzNDksInN1YiI6IjgiLCJzY29wZXMiOltdfQ.O1VHWZaZBe-A-J8_-svH2OKay87WGsLMYogWqUzYkx1JebIHHQKCqvV12QXqQfO8mgWY0NKwPuUekMMKHRFA4BMi_Q8Yj0QFDGmgJQyWf7manGvmGX3ZXyhG_ys63tXBHnOiRWeZWFhFnSTTvm5h2IduCJ8OpVK6ohdUE8OcvrAarYgeX-4O1-lfEGLzAp49SCbBTocsuySpwCMXW30Drp5om6OER9F9vwJKrc0Sg5uE_7r5I9ATX9cLWbw3OVGiExLF_oCFPf8jmZSIEHZ3WsDt1Ss1mABhUjVGId1dIWA55I4k775FNgI53aZhZwhdq3w4SF0w1HNEkmQlZOYNAolMipQGtm6X6apAp_V7D0vYPrg-Jogbm4fMdHK3ZyVs3Yr17_4YSFRPvG0ryjA5gNtppKKrwiy5nn3oxwb0gg1FQWYbFU8-6k87pl3o3ir4AZwgGYDy0wmauaiA1jimbEMNSt0YlYkPZAxWzYFKEBnFEFDvKUh1QMiGjCVzr1KWZiH23rR297QmfrrhD9mnXA5G41ZlcS5pBCyK_97V0VSIHuJMdHcBGKgIWYH2r8PiLT-pGYC3OM_E7ywxW3VM7C8et-PqeitlaJiPyI2r2Q0eeiIiRLxYe0qOiohUl_uuipZpofnURZ-fiaaM7uDJrS3VUk6WdEMsFf-gYtSm0_w');

        this.setState({ data: this.props.data })
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }



    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        this.checkUser();
        console.log('->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.state.ids, this.state.data);

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

    render() {


        return (
            (this.state.data[0].content != null) || (this.state.data === null) ? <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../../../assets/backButton.png")}
                        style={styles.image}
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
                <Text style={styles.Uppertext}>Select Objectives</Text>
                <Text style={styles.Lowertext}>Select as many, or as few, as you’d like</Text>

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
                <CutomeButton style={styles.btn} text="Continue" round
                    onPress={() =>

                        this.props.navigation.navigate('SignupPreferences',
                            {

                                userObjecive: this.state.ids
                            })
                    }
                />


            </View>
                : <ActivityIndicator style={{ flex: 1 }} size={40} />
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    image: {

        marginTop: 20,
        width: 25,
        height: 18,
        alignSelf: "flex-start",

    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 15,

    },
    Lowertext: {
        width: 275,
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
        marginTop: 10,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
    },
    ImportanText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.importanText,
    },
    btn: {
        marginVertical: 50,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    socialImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    ObjectiveCard: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primary
    }
});

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
