// function nulifyUsers(target: Function) {
//     target.prototype.users = 0;
// }

// function changeUsersAdvanced<T extends {
//         new(...args: any[]): {}
//     }>(constructorClass: T) {
//         return class extends constructorClass {
//             users = 3;
//         }
// }

// function setUsers(users: number) {
//     return (protoFunc: Function) => {
//         protoFunc.prototype.users = users;
//     }
// }

// function changeUsersAdvanced<T extends {
//     new(...args: any[]): {}
// }>(constructorClass: T) {
//     return class extends constructorClass {
//         users = 3;
//     }
// }

// function setUserAdvanced (users: number) {
//     return <T extends { new(...args: any[]): {} }>(constructorClass: T) => {
//         return class extends constructorClass {
//             users = users;
//         }
//     }
// }



// function log(
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor:  TypedPropertyDescriptor<(...args: any[]) => any>
// ) {
//     console.log(target);
//     console.log(propertyKey);
//     console.log(descriptor);
// }


// function createdAt() {
//     return <T extends { new(...args: any[]): {} }>(constructorClass: T) => {
//         return class extends constructorClass {
//             createdAt = new Date();
//         }
//     }
// }



// function log() {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//         descriptor:  TypedPropertyDescriptor<(...args: any[]) => any>
//     ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//         console.log(target);
//         console.log(propertyKey);
//         console.log(descriptor);
//         descriptor.value = () => {
//             console.log('no error');
//         }
//     }
// }


// function catchErrorDecorator(rethrow: boolean = false) {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//         descriptor:  TypedPropertyDescriptor<(...args: any[]) => any>
//     ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//         const method = descriptor.value; 
//         descriptor.value = async (...args: any[]) => {
//             try {
//                 const res = await method?.apply(target, args);
//                 return res;
//             } catch (e) {
//                 if (e instanceof Error) {
//                     console.log(e);
//                     if (rethrow) {
//                         throw e;
//                     }
//                 } 
//             }
//         }
//     }
// }


// function maxDecorator(max: number) {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//     ) => {
//         let value: number;
//         const setter = function (newValue: number) {
//             if (newValue > max) {
//                 console.log(`Недопустимое значение, больше максимально возможного: ${max}`);
//             } else {
//                 value = newValue;
//             }
//         }

//         const getter = function () {
//             return value;
//         }

//         Object.defineProperty(target, propertyKey, {
//             set: setter,
//             get: getter
//         })
//     }
// }


interface IUserService {
    getUsersFromDatabase(): number;
}


class UserService implements IUserService {
    private _users: number = 1000;

    setUsersInDatabase(num: number): void {
        this._users = num;
    } 

    getUsersFromDatabase(): number {
        return this._users;
    }
}

// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);
// userService.users = 130;
// console.log(userService.users)