import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types/auth';
import authApi from '../api/auth';
import registerApi from "../api/register";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = ({accessToken, ...userData}) => ({
    type: USER_LOGGED_IN,
    token: accessToken,
    userData
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const loginEmail = credentials => dispatch => authApi.loginEmail(credentials).then(data => login(data, dispatch));

export const registerUser = userData => dispatch => registerApi.registerUser(userData).then(data => login(data, dispatch));


export const login = (data, dispatch) => {
    const {accessToken} = data;
    localStorage.setItem("IPB", accessToken);
    setAuthorizationHeader(accessToken);
    console.log(data);
    dispatch(userLoggedIn(data));
};

export const logout = () => dispatch => {
    localStorage.removeItem("IPB");
    setAuthorizationHeader();
    dispatch(userLoggedOut());
};
