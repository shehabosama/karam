import { LOGIN_URL } from "../constants";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../store/types";


export const login = async ({EMAIL, PASSWORD}) => {
  try {
    return async dispatch => {

      console.log('url : '+LOGIN_URL , "DATA: " + {EMAIL , PASSWORD});
      const result = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: EMAIL,
          password: PASSWORD
        })

      });

      console.log(result.status);
      const json = await result.json();
      if (json && result.status == 200) {
        console.log(json);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: json
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: 'something went wrong!'
        });
        console.log('Unable to fetch!');
      }
    }
  } catch (err) {
    console.log(err);
  }
}