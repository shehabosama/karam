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
    FlatList
} from 'react-native';
import { Colors, IMAGES_URL } from '../../constants';
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
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import { CTMapList } from '../../utils/CTMapList';
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

        currentUser = await AsyncStorageProvider.getItem('currentUser');
        if (currentUser) {
            const json = JSON.parse(currentUser);
            //this.setState({accoutnName:json.name})
            this.getProviderData(json.access_token);
            
        }
       


    }

    getProviderData = async (token) => {
        await this.props.getProviderData(token, this.props.route.params.id)
        if (this.props.data !== null) {
            this.setState({ data: this.props.data, loading: false })
        } else {
            this.setState({ error: this.props.error })
        }
    };
    componentDidUpdate(prevProps, prevState, snapshot) {



    }
    componentWillUnmount() {
        this.props.cleanError();

    }

    renderError = () => {
        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };

    HeadCardForm = () => {
        return (
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
                            this.state.isExpended ? <Text style={styles.Lowertext}>Info:   belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.</Text> :
                                <></>
                        }
                    </View>

                    <View style={{ flexDirection: 'column', marginEnd: 30 }}>
                        <Image source={
                            { uri: `${IMAGES_URL}${this.state.data.image}` }
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
        );
    }

    TabBarForm = () => {
        return (
            <View >
                <View style={{ flexDirection: 'row', borderBottomWidth: 0.8, borderBottomColor: Colors.placeHolder }}>
                    <TouchableOpacity
                        onPress={() => {

                            this.setState({ activeCaseTab: true, subscribeCaseTab: false, prevCaseTab: false })
                        }}>
                        <Text style={this.state.activeCaseTab ? styles.activeTab : styles.nonActiveTab}>
                            Active Cases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {

                            this.setState({ activeCaseTab: false, subscribeCaseTab: true, prevCaseTab: false })
                        }}>
                        <Text style={this.state.subscribeCaseTab ? styles.activeTab : styles.nonActiveTab}>
                            Subscribed Cases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {

                            this.setState({ activeCaseTab: false, subscribeCaseTab: false, prevCaseTab: true })
                        }}>
                        <Text style={this.state.prevCaseTab ? styles.activeTab : styles.nonActiveTab}>
                            Previous Cases </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
    render() {

        return (
            (this.state.data !== null && this.state.loading === false) ? <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <this.HeadCardForm />
                    <View style={{ flex: 1, marginHorizontal: 30, }}>
                        <this.TabBarForm />
                        {this.state.activeCaseTab ? <View>
                            <Text>ActiveCases</Text>
                            {(!this.state.loading) || (this.state.data !== null) ?
                                <View style={styles.container}>
                                    {/* i do this custome list because the normal flatlist getting error with scroll view */}
                                    <CTMapList
                                        data={this.state.data.cases}
                                        style={{ paddingHorizontal: 0, zIndex: -1 }}
                                        numColumns={2}
                                        keyExtractor={(item) => {String(item.id); }}
                                        renderItem={(data) => {
                                            return <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }} >
                                                <TouchableOpacity style={{ flex: 1 }} onPress={() => {

                                                    this.props.navigation.navigate('AboutCase', { id: data.item.id });
                                                }}>
                                                    <CasesCard style={styles.cusomBord} round
                                                        remainingText={data.item.remaining}
                                                        imageUrl={data.item.image}
                                                        name={data.item.name} />
                                                </TouchableOpacity>
                                            </View>
                                        }}
                                    />
                                </View>
                                : (this.props.error === '' || !this.props.error) ? <View style={{ flex: 1 }}>
                                    <ActivityIndicator animating style={{ flex: 1 }} size={40} />
                                </View>
                                    : <View>
                                        <Text>{this.props.error}</Text>
                                    </View>}
                        </View> :
                            this.state.subscribeCaseTab ? <View>
                                <Text>subscribeCaseTab</Text>
                            </View> :
                                this.state.prevCaseTab ? <View><Text>prevCaseTab</Text></View> :
                                    <></>}

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