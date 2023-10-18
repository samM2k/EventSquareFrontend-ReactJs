import ApiClient from "./ApiClient";

class LoginModel {
    constructor() {
        console.log("Constructed login model.")
    }

    BearerToken = null;
    RefreshToken = null;

    Login = async function (email, password) {
        //Login here
        var result = await ApiClient.login(email, password);
        return result;
    }
    Logout = async function () {
        var result = await ApiClient.logout();
        return result;
    }
}

export default LoginModel;