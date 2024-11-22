"use strict";
// function nulifyUsers(target: Function) {
//     target.prototype.users = 0;
// }
class UserService {
    constructor() {
        this._users = 1000;
    }
    setUsersInDatabase(num) {
        this._users = num;
    }
    getUsersFromDatabase() {
        return this._users;
    }
}
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);
// userService.users = 130;
// console.log(userService.users)
