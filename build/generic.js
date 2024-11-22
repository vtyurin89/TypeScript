"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
function splitArrayAndGetHalf(data) {
    const halfwayIndex = data.length / 2;
    return data.splice(0, halfwayIndex);
}
let res = splitArrayAndGetHalf([1, 2, 3, 4, 5]);
const splitFunc = splitArrayAndGetHalf;
const splitFunc2 = splitArrayAndGetHalf;
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
