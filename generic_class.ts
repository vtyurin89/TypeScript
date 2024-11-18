interface Vehicle {
    runMiles: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.runMiles = vehicle.runMiles / 0.62;
    return vehicle;
}

const data = [

    { id: 2, name: 'Петя' },
    
    { id: 1, name: 'Вася' },
    
    { id: 3, name: 'Надя' },
    
];

interface ID {
    id: number,
    name?: string
}

function sortObjects<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc') {
     return data.sort((a, b) => {
         switch(type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
         }
     })
}

class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    } 
}

const res1 = new Resp<string, number>('data', 0 );
