interface IUser {
    name: string,
    age: number,
}

const newKey: keyof IUser = 'name';
function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const myUser: IUser = {
    name: 'Владимир',
    age: 36
}

const userName = getValue(myUser, 'name')

interface StudentData {
    group: number;
    name: string;
}

let students: StudentData[] = [

    { group: 1, name: 'a' },
    
    { group: 1, name: 'b' },
    
    { group: 2, name: 'c' },
    
];

function groupStudents<T extends StudentData[]>(data: T, key: keyof T) {
    let result = {};

}