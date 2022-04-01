import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { Colors } from '../../constants';
import { bindActionCreators } from 'redux';
import CardView from 'react-native-cardview'

import { connect } from 'react-redux';
import { cleanError, } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import DonationCard from '../../component/DonationCard';
import { showMessage, validate } from '../../utils/HelperFunctions';
import CasesCard from '../../component/CasesCard';
import { getProviderData } from '../../actions/DataActions';
class ProviderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            activeCaseTab: true,
            subscribeCaseTab: false,
            prevCaseTab: false,
            data: null,
            error: null,
            loading: true,
            isExpended: false,
            error: ''
        };
    }

    async componentDidMount() {
        await this.props.getProviderData('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWI1NzBiZS0zNmE3LTQ1YTEtYTMwMi01ZjIzMzA4N2ZjMjAiLCJqdGkiOiI2NzhlZWU4Yjc3NWVkYWEwY2MzNWEyMDhhODgyMjYzNTc5YjU2YmNjNmVlYTc2ZDExNzg3OWEwNDk5NTBmNmE4YmY4MTZjYjY4ZWJiNTk3OSIsImlhdCI6MTY0ODM3ODA5Mi4wMDEwMiwibmJmIjoxNjQ4Mzc4MDkyLjAwMTAzNywiZXhwIjoxNjc5OTE0MDkxLjg5NjU0OCwic3ViIjoiMSIsInNjb3BlcyI6W119.Ta85AZGH0luZlfztq7Z8a9XUgZJk9ITiRMGFijCWaZPTzhtwMVXXCQJpgcsZpamBw0iWCejkQLMCmy95BDfpUZZmBU0N_Lumc9a8w2rdtkQbiE4-yzOqFINjoPEIdfcwYrRFEYZjjP3-6Quyi_hY4g_v1A7_9Roe4ol0i04bYioLIdE7KZjgfW-FDY-rjrHHooFuO_uqMUZcgW9Oq98ugomQVUylamDQY_Icbhs45pcbmQfILKin5W__k5K7VLRCE5sU10p6TBZxCgch4w8LzgU2xQ5Ns0TgJTvSlmbqoqGi9WJzsH0NJXLdR6nCbsPpPeB3MCvKnOMs1mHCmyQnbxrqEzy4ZPYUyzLGxqKnh5wttQOENUyaJEeXXWwvzPQGjkeN7vUjMIa-JOR-RM_zBczuRjtonZX_5pGVxmh6jjxxUPV3vYVL5qKsgn1HX3MidPXbwZ6grpF2gkvZVlGMtml8ekBEGCejqYUKt1-4kAoSb-OEeU838Svx5-HxqsG0LjaPQ3ISOSfZWsrqGkewJ5FQdGRW3r3KjPVyCi_r1wjCo7U64PU03JGY74d_BS_h19jkiBgtqnRhPy6KFUTOEcDp6TiZPE0pRtryqVRZMVOC55L3yHOammdnAmwuDBzbsqsHZOvihJml0dITyVDtKZWkQZxMsvbLk30xCxmnhYQ', this.props.route.params.id)
        if (this.props.data !== null) {
            this.setState({ data: this.props.data, loading: false })
        } else {
            this.setState({ error: this.props.error })
        }


    }
    componentDidUpdate(prevProps, prevState, snapshot) {

       

    }
    componentWillUnmount() {
        this.props.cleanError();

    }

    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };



    render() {

        return (
            (this.state.data !== null && this.state.loading === false) ? <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <CardView
                            style={{ flex: 1, flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20 }}
                            cardElevation={6}
                            cardMaxElevation={6}
                            cornerRadius={20} >
                            <View style={{ flex: 1, flexDirection: 'column', marginStart: 10 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}>
                                    <Image
                                        source={require("../../../assets/backButton.png")}
                                        style={styles.image}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.Uppertext}>{this.state.data.name}</Text>
                                <Text style={styles.Lowertext}>Registration: {this.state.data.registration}</Text>
                                {
                                    this.state.isExpended ? <Text style={styles.Lowertext}>Info: {this.state.data.description}</Text> :
                                        <></>
                                }
                            </View>

                            <View style={{ flexDirection: 'column', marginEnd: 30 }}>
                                <Image source={
                                    { uri: `http://192.168.1.7/karam/public/storage/${this.state.data.image}` }
                                } style={{ marginTop: 50, width: 100, height: 110 }} />
                                <TouchableOpacity onPress={() => {
                                    this.setState({

                                        isExpended: this.state.isExpended ? false : true
                                    })
                                }}>
                                    <Text style={styles.smalBoldText}>Info +</Text>
                                </TouchableOpacity>

                            </View>
                        </CardView>
                    </View>

                    <View style={{ flex: 1, marginHorizontal: 30, }}>
                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.8, borderBottomColor: Colors.placeHolder }}>
                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ activeCaseTab: true, subscribeCaseTab: false, prevCaseTab: false })
                                }}>
                                <Text style={this.state.activeCaseTab ? styles.activeTab : styles.nonActiveTab}>Active Cases</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ activeCaseTab: false, subscribeCaseTab: true, prevCaseTab: false })
                                }}>
                                <Text style={this.state.subscribeCaseTab ? styles.activeTab : styles.nonActiveTab}>Subscribed </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ activeCaseTab: false, subscribeCaseTab: false, prevCaseTab: true })
                                }}>
                                <Text style={this.state.prevCaseTab ? styles.activeTab : styles.nonActiveTab}>Previous Cases </Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AboutCase')}>
                            {/* <CasesCard style={styles.cusomBord} round /> */}
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>
                : <View style={{ flex: 1 }}>
                    <ActivityIndicator animating style={{ flex: 1 }} size={40} />
                </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
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

    smalBoldText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginEnd: 10
    },
    activeTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
    },
    nonActiveTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: Colors.placeHolder,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
    },
    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row'
    },
});

const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    getProviderData: bindActionCreators(getProviderData, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
    //getProviderDataTEST: bindActionCreators(getProviderData, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProviderScreen);