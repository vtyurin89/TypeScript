class UserBuilder {
    name: string = "";

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    setName(name: string) {
        this.name = name;
        return this;
    }
    
    isAdmin(): this is AdminBuider {
        return this instanceof AdminBuider;
    }
}

class AdminBuider extends UserBuilder {
    roles: string[] = [];
}

let user: UserBuilder | AdminBuider = new UserBuilder();