class LoginModel {
    constructor() {
        console.log("Constructed login model.")
    }

    BearerToken = null;
    RefreshToken = null;
    UserIsLoggedIn = false;

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
                //setIsLoggedIn(true);
            this.UserIsLoggedIn = true;
        } catch (e) {
            console.log("Exception thrown when making login request", e);
            if (e.status == 401) {
            this.UserIsLoggedIn = false;
                //setIsLoggedIn(false);
            }
        }
    }
    Logout = function () {
        //Logout here

        this.UserIsLoggedIn = false;
    }
}

export default LoginModel;