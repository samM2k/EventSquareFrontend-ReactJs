import ApiClient from "../Helpers/ApiClient";
import UserModel from "./UserModel";

class AuthModel {
    constructor() { }

    isAuthorized = false;

    userModel = null;

    loginStateChangedCallback = null;

    setLoginStateChangedCallback = (callback) => {
        this.loginStateChangedCallback = callback;
    };

    login = async (email, password) => {
        var result = await ApiClient.login(email, password);
        this.isAuthorized = result.Success;
        if (result.Success) {
            this.userModel = new UserModel(result.Body.id, result.Body.username, result.Body.email, result.Body.phone);
        } else {
            this.userModel = null;
        }

        this.loginStateChangedCallback(this.isAuthorized);
        if (result.Success)
            return "";
        return result.Body;
    };

    logout = async () => {
        var result = await ApiClient.logout();
        if (result.Success) {
            this.isAuthorized = false;
            this.userModel = null
        }

        this.loginStateChangedCallback(this.isAuthorized);

        if (result.Success)
            return "";
        return result.Body;
    };

    validate = async () => {
        var result = await ApiClient.validateSession();
        this.isAuthorized = result.Success;
        if (this.isAuthorized) {
            this.userModel = new UserModel(result.Body.id, result.Body.username, result.Body.email, result.Body.phone);
        }
        this.loginStateChangedCallback(this.isAuthorized);
        if (result.Success)
            return "";
        return result.Body;
    };

    signup = async (email, password) => {
        var result = await ApiClient.signup(email, password);
        this.isAuthorized = result.Success;
        if (result.Success)
            this.userModel = new UserModel(result.Body.id, result.Body.username, result.Body.email, result.Body.phone);
        else
            this.userModel = null;

        this.loginStateChangedCallback(this.isAuthorized);
        if (result.Success)
            return "";
        return result.Body;
    };
}

export default AuthModel;