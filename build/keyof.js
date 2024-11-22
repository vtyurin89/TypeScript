"use strict";
const newKey = 'name';
function getValue(obj, key) {
    return obj[key];
}
const myUser = {
    name: 'Владимир',
    age: 36
};
const userName = getValue(myUser, 'name');
let students = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function groupStudents(data, key) {
    let result = {};
}
