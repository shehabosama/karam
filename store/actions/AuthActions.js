import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS, LOGIN_URL } from "../../constants";
import { SET_DATA } from "../types";

const API_URL = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca';
export const getCitiesData = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    email: 'admin@admin.com',
                    password: 'password',
                })
            });

            const json = await result.json();

            if (json) {
                console.log(json);
                dispatch({
                    type: SET_DATA,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (err) {
        console.log(err);
    }
}


export const login = () => {

    try {
        return async dispatch => {
           
            const result = await fetch(LOGIN_URL, {
                method: 'POST',

                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                           email:'admin@admin.com',
                    password:'password'
                 })
                 //{
                //     email:'admin@admin.com',
                //     password:'password'
                // } ,//

            });
      
             const json = await result.json();
           console.log('tessssssssssst ', json);
            // if (json) {
            //     console.log(json);
            //     dispatch({
            //         type: SET_DATA,
            //         payload: json
            //     });
            // } else {
            //     console.log('Unable to fetch!');
            // }
        }
    } catch (err) {
        console.log(err);
    }
};


export const action = () => {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            return {
                city: json.name,
                temperature: kelvinToF(json.main.temp),
                description: _.capitalize(json.weather[0].description)
            }
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}


export const deleteData = () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('person');
            dispatch(
                {
                    type: SET_DATA,
                    payload: 'done',
                }
            );
        } catch (err) { console.log(err); }
    }
};
export const getData = () => {
    return async dispatch => {
        try {

        } catch (err) { } let person = await AsyncStorage.getItem('person');

        const personJson = person ? JSON.parse(person) : {};
        console.log("---------------------------------");
        console.log(personJson);
        dispatch(
            {
                type: SET_DATA,
                payload: personJson,
            }
        );
    }
};