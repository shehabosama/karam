import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationBottomHome from "./views/BottomNavigationHome";
import LoginScreen from './views/Login';
import SplashScreen from './views/Splash';
import SignUp from './views/SignUp';
import SignupProfileDetails from './views/SignupProfileDetails';
import * as AsyncStorageProvider from './cache/AsyncStorageProvider'
import SignupVerifyAccountScreen from './views/SignupVerifyAccountScreen';
import SignupObjectives from './views/SignupObjectives';
import SignupPreferences from './views/SignupPreferences';
import SignupGoal from './views/SignupGoal';
import SignupFrequency from './views/SignupFrequency';
import Cases from './views/Cases';
import Causes from './views/Causes';
import DonationScreen from './views/DonationScreen';
import ProfileScreen from './views/ProfileScreen';
import AboutCase from './views/AboutCase';
import PersonalInformation from './views/PersonalInformation';
import ProviderScreen from './views/ProviderScreen';
import Providers from './views/Providers';
import Test from './views/Test';

import SearchProviders from './views/SearchProviders';
import SearchCases from './views/SearchCases';
import SearchCauses from './views/SearchCauses';
import CauseScreen from './views/CauseScreen';
import TestSlider from './views/TestSlider';
import SliderScreen from './views/SliderScreen';
import SeekBar from './views/TestSeekBar';
import SetDonationValue from './views/SetDonationValue';
import PaymentMethod from './views/PaymentMethod';
import AddNewPaymentMethod from './views/AddNewPaymentMethod';
import ThankScreen from './views/ThankScreen';
import WalletScreen from './views/WalletScreen';
import SubscriptionScreen from './views/SubscriptionScreen';
import SampleApp from './views/TestSeekBar';
import MyCardsScreen from './views/MyCardsScreen';
import NotificationScreen from './views/NotificationScreen';
import TestBayTabs from './views/TestBayTabs';
const TasksStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                            size = focused ? 25 : 20;
                        } else if (route.name === 'WalletScreen') {
                            iconName = 'wallet-outline';
                            size = focused ? 25 : 20;
                        } else if (route.name === 'ProfileScreen') {
                            iconName = 'person-outline';
                            size = focused ? 25 : 20;
                        }
                        return (
                            <Icon name={iconName} size={size} color={color} />
                        );
                    }

                })
            }
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#0080ff',
                inactiveTintColor: '#777777',
                labelStyle: { fontSize: 15, fontWeight: 'bold' },
                showLabel: false,
            }}
        >
            <Tab.Screen name={'Home'} component={NavigationBottomHome} />
            <Tab.Screen name={'WalletScreen'} component={WalletScreen} />
            <Tab.Screen name={'ProfileScreen'} component={ProfileScreen} />


            <Tab.Screen name={'Donations'} component={DonationScreen} options={{
                tabBarButton: props => null,

            }} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                }}
                name={'Cases'} component={Cases} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                }}
                name={'Causes'} component={Causes} />
            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'Providers'} component={Providers} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                    unmountOnBlur: true,
                }}
                name={'AboutCase'} component={AboutCase} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                    unmountOnBlur: true,
                }}
                name={'CauseScreen'} component={CauseScreen} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                    unmountOnBlur: true,
                }}
                name={'ProviderScreen'} component={ProviderScreen} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'SearchProviders'} component={SearchProviders} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'SearchCases'} component={SearchCases} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'SearchCauses'} component={SearchCauses} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                    unmountOnBlur: true,
                }}
                name={'SetDonationValue'} component={SetDonationValue} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'PaymentMethodFirstStage'} component={PaymentMethod} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'AddNewPaymentMethod'} component={AddNewPaymentMethod} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'ThankScreen'} component={ThankScreen} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'SubscriptionScreen'} component={SubscriptionScreen} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'MyCardsScreen'} component={MyCardsScreen} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,

                }}
                name={'NotificationScreen'} component={NotificationScreen} />
        </Tab.Navigator>
    );
}

const TasksNavigator = () => {
    const [checker, setChecker] = useState(false);
    const checkUser = async () => {

        try {

            const currentUser = await AsyncStorageProvider.getItem('currentUser');
            if (currentUser) {

                setChecker(true);
            }
        } catch (error) {
            //  console.log(error);
            setChecker(false);
        }

    };

    checkUser();
    return (
        <TasksStackNavigator.Navigator initialRouteName=''>
            {checker ? <TasksStackNavigator.Screen
                name="HomeTabsInitial"
                component={HomeTabs}
                options={{ headerShown: false }}
            />
                :
                <TasksStackNavigator.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}

                />
            }
            <TasksStackNavigator.Screen
                name="Test"
                component={Test}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="Signup"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="SignupProfileDetails"
                component={SignupProfileDetails}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="SignupVerifyAccount"
                component={SignupVerifyAccountScreen}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="SignupObjectives"
                component={SignupObjectives}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="SignupPreferences"
                component={SignupPreferences}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="SignupGoal"
                component={SignupGoal}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="SignupFrequency"
                component={SignupFrequency}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="PersonalInformation"
                component={PersonalInformation}
                options={{ headerShown: false }}
            />
            <TasksStackNavigator.Screen
                name="SliderScreen"
                component={SliderScreen}
                options={{ headerShown: false }}

            />

            <TasksStackNavigator.Screen
                name="SampleApp"
                component={SampleApp}
                options={{ headerShown: false }}

            />
            

            
            <TasksStackNavigator.Screen
                name="TestBayTabs"
                component={TestBayTabs}
                options={{ headerShown: false }}

            />
        </TasksStackNavigator.Navigator>

    );

};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TasksNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;