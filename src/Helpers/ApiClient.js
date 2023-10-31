import ApiResult from "../DataTypes/ApiResult";

class ApiClient {
    static domain = "https://localhost:7031";

    // Returns ApiResult
    static login = async (email, password) => {
        const getExceptionFromStatusCode = (statusCode) => {
            switch (statusCode) {
                case 0:
                    return "Could not connect to the server";
                default:
                    return `Unrecognised error code (${statusCode})`;
            }
        }


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
            return new ApiResult(true, response);
        } catch (e) {
            return new ApiResult(false, e.responseText ?? getExceptionFromStatusCode(e.status));
        }
    }

    static signup = async (email, password) => {
        var settings = {
            "url": ApiClient.domain + "/api/account/signup",
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
            return new ApiResult(true, response);
        } catch (e) {
            var errors = e.responseJSON.errors;

            return new ApiResult(false, errors.Email
                ? errors.Email[0]
                : errors.Password
                    ? errors.Password[0]
                    : errors.length
                        ? errors[0].description
                        : "Unknown error");
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
            return new ApiResult(true, response);
        } catch (e) {
            if (e.status > 399 && e.status < 501)
                return new ApiResult(true, null);
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
            return new ApiResult(true, response);
        } catch (e) {
            return new ApiResult(false, e.responseText);
        }
    }


    static getEvents = async () => {
        var settings = {
            "url": ApiClient.domain + "/api/events",
            "method": "GET",
            "timeout": 0,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        };

        try {
            var response = await $.ajax(settings);
            return new ApiResult(true, response);
        } catch (e) {
            return new ApiResult(false, e.responseText);
        }
    }

    static getEvent = async (id) => {
        var settings = {
            "url": ApiClient.domain + "/api/events/" + id,
            "method": "GET",
            "timeout": 0,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        };

        try {
            var response = await $.ajax(settings);
            return new ApiResult(true, response);
        } catch (e) {
            return new ApiResult(false, e.responseText);
        }
    }

    static postEvent = async (calendarEvent) => {
        var settings = {
            "url": ApiClient.domain + "/api/events",
            "method": "POST",
            "timeout": 0,
            headers: {
                "Content-Type": "application/json",
            },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: JSON.stringify(calendarEvent)
        };

        try {
            var response = await $.ajax(settings);
            return new ApiResult(true, response);
        } catch (e) {
            return new ApiResult(false, e.responseJSON?.title ?? getExceptionFromStatusCode(e.status));
        }
    }
}

export default ApiClient;