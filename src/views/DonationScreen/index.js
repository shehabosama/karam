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

import { connect } from 'react-redux';
import { cleanError, signIn } from '../../actions/AuthActions';
import CutomeButton from '../../component/CustomeButton';
import CutomeTextInput from '../../component/CustomeInput';
import DonationCard from '../../component/DonationCard';
import { showMessage, validate } from '../../utils/HelperFunctions';
import gloable from '../../styles/gloable';
import styles from './style';

class DonationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, upComingCaseTab: true, completedCaseTab: false, error: false };

    }

    componentDidMount() {
        this.checkUser();
        if (this.props.currentUser !== null) {
            this.setState({ loading: false })
        } else if (this.props.error !== null) {
            this.setState({ loading: false })
        }

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(
        //   'TCL: LoginScreen -> componentDidUpdate -> prevProps, prevState, snapshot',
        //   prevProps,
        //   prevState,
        //   snapshot,
        // );
        this.checkUser();



    }
    componentWillUnmount() {
        this.props.cleanError();

    }
    checkUser = async () => {
        // if (this.props.currentUser) {
        //     this.props.navigation.navigate('HomeTabs');
        // }
        // console.log(this.props.currentUser);


    };
    renderError = () => {
        // this.setState({error: this.props.error});

        return <Text style={styles.renderError}>{this.props.error}</Text>;
    };



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <Text style={styles.Uppertext}>Donations</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Lowertext}>Subscribed Causes</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Causes')} >
                                <Text style={styles.HintText}>View All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.HorizontalContainer}>
                            <Image
                                source={require("../../../assets/waterIcon.png")}
                                style={styles.socialImage}
                            />
                            <Image
                                source={require("../../../assets/roofIcon.png")}
                                style={styles.socialImage}
                            />
                            <Image
                                source={require("../../../assets/educatoinIcon.png")}
                                style={styles.socialImage}
                            />
                            <Image
                                source={require("../../../assets/prisonIcon.png")}
                                style={styles.socialImage}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ upComingCaseTab: true, completedCaseTab: false })

                                }}>
                                <Text style={this.state.upComingCaseTab ? styles.activeTab : styles.nonActiveTab}>
                                    Upcoming
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {

                                    this.setState({ upComingCaseTab: false, completedCaseTab: true })

                                }}>
                                <Text style={this.state.completedCaseTab ? styles.activeTab : styles.nonActiveTab}>
                                    Completed
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <DonationCard style={styles.cusomBord} round />
                    </ScrollView>
                </View>
            </View>


        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    error: state.auth.error,
});
const mapDispatchToProps = dispatch => ({
    signIn: bindActionCreators(signIn, dispatch),
    cleanError: bindActionCreators(cleanError, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DonationScreen);