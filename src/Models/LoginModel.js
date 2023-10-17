class LoginModel {
    constructor() {
        console.log("Constructed login model.")
    }

    BearerToken = null;
    RefreshToken = null;

    Login = async function (email, password) {
        //Login here
        var settings = {
            "url": "https://localhost:7031/api/account/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                "email": email,
                "password": password
            }),
        };

        try {
            var response = await $.ajax(settings);
            console.log("Response", response);
            return true;
        } catch (e) {
            console.log("Exception thrown when making login request", e);
            return false;
        }
    }
    Logout = async function () {
        //Logout here
        return;
    }
}

export default LoginModel;