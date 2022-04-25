import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { Colors, IMAGES_URL } from '../../constants';
import { bindActionCreators } from 'redux';
import CardView from 'react-native-cardview'

import { connect } from 'react-redux';
import { cleanError, } from '../../actions/AuthActions';
import CasesCard from '../../component/CasesCard';
import { getCauseData, getProviderData } from '../../actions/DataActions';
import * as AsyncStorageProvider from '../../cache/AsyncStorageProvider';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
class CauseScreen extends Component {
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
            this.getCausesData(json.access_token);
            
        }

    }
    getCausesData =async(token)=>{
        await this.props.getCauseData(token, this.props.route.params.id)
        if (this.props.data !== null) {
           // console.log("dtat teststst : " , this.props.data);
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



    render() {

        return (
            (this.state.data !== null && !this.state.loading ) ? <View style={styles.container}>
               
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
                                <Text style={styles.Lowertext}>description : {this.state.data.description}</Text>
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

                            <View style={{ flexDirection: 'column', marginEnd: 20 }}>
                                <Image source={
                                    { uri: `${IMAGES_URL}${this.state.data.image}` }
                                } style={{ marginTop: 50, width: 40, height: 50 }} />
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

                    <View style={{ flex: 1, marginHorizontal: 10, }}>
                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.8, borderBottomColor: Colors.placeHolder , marginHorizontal:10 }}>
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


                        {(!this.state.loading) || (this.state.data!==null) ? <View style={styles.container}>

                            <FlatList
                                numColumns={2}
                                initialNumToRender={4}
                                data={this.state.data.cases}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={ styles.round } underlayColor="transparent">
                                                    <Pressable onPress={()=>{
                                                     this.props.navigation.navigate('AboutCase', { id: item.id });
                                                }}>
                                                    <ImageBackground
                                              //  source={require('../assets/maketCardPhoto.png')}
                                                source={{uri: `${IMAGES_URL+item.image}` }}
                                                style={styles.bgContainer}
                                                imageStyle={{ borderRadius: 10 }}>
                                
                                                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                                                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
                                                    <Image style={{width:50 , height:60 ,  alignSelf: 'center' }} source={{uri: `${item.iconImage}` }} />
                                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Ramaining</Text>
                                                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{item.remaining} EGP</Text>
                                                </View>
                                
                                            </ImageBackground>
                                            <View style={{ flexDirection: 'row', }}>
                                                <Text style={{ flex: 1, color: '#000', marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={{ color: Colors.primary, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>85%</Text>
                                            </View>
                                                </Pressable>
                                        </View>
                                    );
                                }}
                                keyExtractor={item => item.id}
                                refreshing={this.state.refresh}
                                ListEmptyComponent={this.ListEmptyComponent}
                                onRefresh={this.onRefresh}
                             //   ListHeaderComponent={getHederView}
                             //   ListFooterComponent={getFoterView}
                            />

                        </View>
                        :(this.props.error === ''||!this.props.error)?<View style={{ flex: 1 }}>
                            <ActivityIndicator animating style={{ flex: 1 }} size={40} />
                        </View>
                        :<View>
                            <Text>{this.props.error}</Text>
                        </View>}



                    </View>

             
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
        backgroundColor:'#fff'
    },
    image: {
       
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
    round: {
        
        borderRadius: 10,
        alignSelf:"center",
        borderColor: '#23596A',
        marginVertical:5,
        marginHorizontal:10
    },
    bgContainer: {
        width:170,
        height:170,
        flex:1,
       // height: 149,
        // backgroundColor: 'rgba(10, 10, 10, 0.4)',
      //  justifyContent: 'center',
       // borderRadius: 50,
        
        
    },
});

const mapStateToProps = state => ({
    data: state.dataReducer.data,
    error: state.dataReducer.error,
});
const mapDispatchToProps = dispatch => ({
    getCauseData: bindActionCreators(getCauseData, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
    //getProviderDataTEST: bindActionCreators(getProviderData, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CauseScreen);