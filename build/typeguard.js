"use strict";
class UserBuilder {
    constructor(name) {
        this.name = "";
        if (name) {
            this.name = name;
        }
    }
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuider;
    }
}
class AdminBuider extends UserBuilder {
    constructor() {
        super(...arguments);
        this.roles = [];
    }
}
let user = new UserBuilder();
