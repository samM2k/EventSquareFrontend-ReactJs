class ApiResult {
    Success; //bool
    Body; //string

    constructor(success, body) {
        this.Success = success;
        this.Body = body;
    }
}

export default ApiResult;