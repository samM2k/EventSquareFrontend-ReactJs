class UserModel {

    id;
    username;
    email;
    phone;

    constructor(id, username, email, phone) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }

}

export default UserModel;