let BASE_URL = 'http://192.168.1.2/karam/public/api/';
export const LOGIN_URL = `${BASE_URL}auth/login`;
export const SIGNUP_URL = `${BASE_URL}auth/signup`;
export const UPDATE_USER_INFO_URL = `${BASE_URL}edit`;
export const GET_OBJECTIVE_DATA_URL = `${BASE_URL}objectives`;
export const GET_PREFRENCES_DATA_URL = `${BASE_URL}preferences`;
export const UPDATE_OBJECT_AND_PREF = `${BASE_URL}update-user`;
export const GET_HOME_DATA = `${BASE_URL}home`;
export const GET_CASES_DATA = `${BASE_URL}cases`;
export const GET_CAUSES_DATA = `${BASE_URL}causes`;
export const GET_PROVIDERS_DATA = `${BASE_URL}providers`;
export const GET_CASE_DATA = `${BASE_URL}case`;
export const GET_PROVIDER_DATA = `${BASE_URL}provider`;
export const GET_CASES_BY_NAME = `${BASE_URL}cases-search/te`
export const GET_CAUSES_BY_NAME = `${BASE_URL}causes-search/t`
export const GET_PROVIDERS_BY_NAME = `${BASE_URL}providers-search/t`
export const GET_CAUSE_DATA = `${BASE_URL}cause`;
export const IMAGES_URL ='http://192.168.1.2/karam/public/storage/';
export const Colors ={
    primary:'#23596A',
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