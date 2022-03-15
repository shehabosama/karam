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
const TasksStackNavigator = createStackNavigator();

// const defaultStyles = {
//     headerStyle: {
//         backgroundColor: Colors.primary,
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         fontFamily: 'Poppins-Regular',
//     },
// };

// const styles = StyleSheet.create({
//     headerRightSpace:{
//         marginRight:5,
//     },
// });

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
                        } else if (route.name === 'Donation') {
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
            {/* <Tab.Screen name={'Donation'} component={Donation} />
            <Tab.Screen name={'ProfileScreen'} component={ProfileScreen} />
            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                }}
                name={'Causes'} component={Causes} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                }}
                name={'Cases'} component={Cases} />

            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                }}
                name={'AboutCase'} component={AboutCase} />
            <Tab.Screen
                options={{
                    tabBarButton: props => null,
                }}
                name={'ProviderScreen'} component={ProvidersScreen} /> */}
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
            console.log(error);
            setChecker(false);
        }

    };

    checkUser();
    return (
        <TasksStackNavigator.Navigator initialRouteName='SignupPreferences'>

            {/* <TasksStackNavigator.Screen
                name="Test"
                component={TestScreen}
                options={{ headerShown: false }}

            /> */}

            {/* <TasksStackNavigator.Screen
                    name="PersonalInformation"
                    component={PersonalInformation}
                    options={{ headerShown: false }}
                /> */}
            {/* <TasksStackNavigator.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ headerShown: false }}
            /> */}



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
            {/* 
           
           
          
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
          
         */}



        </TasksStackNavigator.Navigator>

    );

};
// const TasksNavigator = () => {

//     const dispatch = useDispatch();

//     const {tasks} = useSelector(state=>state.task);

//     const deleteListClickHandler=(id , navigation)=>{
//         const listHasTasks = tasks.find(t=> t.listId == id);
//         if(listHasTasks){
//             return Alert.alert('Cannot delete' , 'List cannot be deleted because it is not empty , First delete tasks then delete list')
//         }
//         Alert.alert('Delete List' , 'Are you sure you want to delete this list ?' , 
//         [
//             {text: 'Cancle'},
//             {text: 'Delete' , onPress:()=>deleteListHandler(id , navigation)}
//         ]);
//     };

//     const deleteListHandler=(id , navigation)=>{
//         dispatch(deleteList(id,()=>{
//             navigation.goBack();
//             ToastAndroid.show('List Successfully deleted!' , ToastAndroid.LONG);
//         }));
//     };
//     return (
//         <TasksStackNavigator.Navigator>
//             <TasksStackNavigator.Screen
//                 name="Splash"
//                 component={HomeScreen}
//                 options={{ ...defaultStyles, title: 'Your lists', headerTitleAlign: 'center' }}
//             />


{/* <TasksStackNavigator.Screen
        name="List"
        component={ListScreen}
        options={({ route, navigation }) => ({ 
          ...defaultStyles,
          title: route.params.name,
          headerRight: () => (
            <View style={styles.headerRightSpace}>
              <Icon
                name="md-trash"
                color="#fff"
                size={30}
                onPress={() => deleteListClickHandler(route.params.id, navigation)}
              />
            </View>
          ),
        })}
      /> */}

{/* <TasksStackNavigator.Screen
                name="Verficatation"
                component={AddTaskScreen}
                options={{ ...defaultStyles, title: 'Add new task' }}
            />
        </TasksStackNavigator.Navigator>
    ); }*/
};
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TasksNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;