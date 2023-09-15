export class User {
    constructor(user,password,email){
        this.user = user;
        this.password = password;
        this.email = email;
    }
}

export class UserWithoutPassword {
    constructor(user,email){
        this.user = user;
        this.email = email;
    }
}