interface IUserService {
    users: number;
    getUsersFromDatabase(): number;
}

@changeUsersAdvanced
class UserService implements IUserService {
    users: number = 1000;
    getUsersFromDatabase(): number {
        return this.users;
    }
}

function nulifyUsers(target: Function) {
    target.prototype.users = 0;
}

function changeUsersAdvanced<T extends {
        new(...args: any[]): {}
    }>(constructorClass: T) {
        return class extends constructorClass {
            users = 3;
        }
}

console.log(new UserService().getUsersFromDatabase());


// function logUsers(obj: IUserService) {
//     console.log(`Users: ${obj.users}`);
//     return obj;
// }

// console.log(new UserService().getUsersFromDatabase());
// console.log(nulifyUsers(new UserService()).getUsersFromDatabase());

