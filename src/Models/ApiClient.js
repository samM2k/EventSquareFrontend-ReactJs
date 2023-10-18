import ApiResult from "./ApiResult";

class ApiClient {
    static domain = "https://localhost:7031";

    // Returns ApiResult
    static login = async (email, password) => {
        var settings = {
            "url": ApiClient.domain + "/api/account/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                "email": email,
                "password": password
            }),
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        };

        try {
            var response = await $.ajax(settings);
            //console.log("Response", response);
            return new ApiResult(true, null);
        } catch (e) {
            return new ApiResult(false, e.responseText);
        }
    }

    static logout = async () => {
        var settings = {
            "url": ApiClient.domain + "/api/account/logout",
            "method": "GET",
            "timeout": 0,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        };

        try {
            var response = await $.ajax(settings);
            //console.log("Response", response);
            return new ApiResult(true, null);
        } catch (e) {
            return new ApiResult(false, e.responseText);
        }
    }

    static validateSession = async () => {
        var settings = {
            "url": ApiClient.domain + "/api/validate",
            "method": "GET",
            "timeout": 0,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        };

        try {
            var response = await $.ajax(settings);
            //console.log("Response", response);
            return new ApiResult(true, null);
        } catch (e) {
            return new ApiResult(false, e.responseText);
        }
    }
}

export default ApiClient;