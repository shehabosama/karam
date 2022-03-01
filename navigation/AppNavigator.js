import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Alert, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { Colors } from '../constants';
import Splash from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import SignupProfileDetails from '../screens/SignupProfileDetailsScreen';
import SignupVerifyAccount from '../screens/SignupVerifyAccountScreen';
import SignupObjectives from '../screens/SignupObjectiveScreen';
import SignupPreferences from '../screens/SignupPreferences';
import SignupGoal from '../screens/SignupGoal';





const TasksStackNavigator = createStackNavigator();

const defaultStyles = {
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Poppins-Regular',
    },
};

// const styles = StyleSheet.create({
//     headerRightSpace:{
//         marginRight:5,
//     },
// });
const TasksNavigator = () => {

    return (
        <TasksStackNavigator.Navigator>
            <TasksStackNavigator.Screen
                name="Home"
                component={Splash}
                options={{ headerShown: false }}

            />

            <TasksStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="SignupProfileDetails"
                component={SignupProfileDetails}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="SignupVerifyAccount"
                component={SignupVerifyAccount}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="SignupObjectives"
                component={SignupObjectives}
                options={{ headerShown: false }}

            />
              <TasksStackNavigator.Screen
                name="SignupGoal"
                component={SignupGoal}
                options={{ headerShown: false }}

            />
            <TasksStackNavigator.Screen
                name="SignupPreferences"
                component={SignupPreferences}
                options={{headerShown:false}}
            />
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


//              <TasksStackNavigator.Screen
//                 name="Rigster"
//                 component={TaskScreen}
//                 options={{ ...defaultStyles, title: 'Update task' }}
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