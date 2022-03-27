
let BASE_URL = 'http://192.168.1.7/karam/public/api/';
export const LOGIN_URL = `${BASE_URL}auth/login`;
export const SIGNUP_URL = `${BASE_URL}auth/signup`;
export const GET_OBJECTIVE_DATA_URL = `${BASE_URL}objectives`;
export const GET_PREFRENCES_DATA_URL = `${BASE_URL}preferences`;
export const UPDATE_OBJECT_AND_PREF = `${BASE_URL}update-user`
export const Colors ={
    primary:'#23596a',
    secondary:'#E5E6F8',
    tertiary:'#ddd',
    quaternary:'#aaa',
    danger:'#DC143C',
    placeHolder:'#848484',
    importanText:'#bc8363',
    blackText:'#000',
    whiteText:'#fff'
};
export const STORAGE_KEYS = {
    auth : 'auth_key',
    tokenKey : 'token_Key',
}