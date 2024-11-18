function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

function splitArrayAndGetHalf<T>(data: Array<T>): Array<T> {
    const halfwayIndex = data.length / 2;
    return data.splice(0, halfwayIndex);
}

let res = splitArrayAndGetHalf([1, 2, 3, 4, 5]);


const splitFunc: <T>(data: Array<T>) => Array<T> = splitArrayAndGetHalf;
const splitFunc2: <T>(data: Array<T>) => Array<T> = splitArrayAndGetHalf;


function toString<T>(data: T): string | undefined {
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