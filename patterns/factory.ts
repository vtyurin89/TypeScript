// FACTORY

// interface IInsurance {
//     id: number;
//     status: string;
//     setVehicle(vehicle: any): void;
//     submit(): Promise<boolean>;
// }

// class TFInsurance implements IInsurance {
//     id: number = 0;
//     status: string = "BASIC";
//     private vehicle: any;

//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle;
//     }

//     async submit(): Promise<boolean> {
//         const res = await fetch('', {
//             method: 'POST',
//             body: JSON.stringify({ vehicle: this.vehicle })
//         });
//         const data = await res.json();
//         return data.isSuccess;
//     }
// }


// class ABInsurance implements IInsurance {
//     id: number = 1;
//     status: string = "ADVANCED";
//     private vehicle: any;

//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle;
//     }

//     async submit(): Promise<boolean> {
//         const res = await fetch('', {
//             method: 'POST',
//             body: JSON.stringify({ vehicle: this.vehicle })
//         });
//         const data = await res.json();
//         return data.isSuccess;
//     }
// }


// abstract class InsuranceFactory {
//     db: any;
//     abstract createInsurance(): IInsurance;

//     saveHistory(ins: IInsurance) {
//         this.db.save(ins.id, ins.status);
//     }
// }


// class TFInsuranceFactory extends InsuranceFactory {
//     createInsurance(): IInsurance {
//         return new TFInsurance();
//     }
// }


// const TFIF = new TFInsuranceFactory();
// const ins = TFIF.createInsurance();

// const INSURANCE_TYPE = {
//     tf: TFInsurance,
//     ab: ABInsurance,
// }


// SINGLETON

// class MyMap {
//     private static instance: MyMap;

//     map: Map<number, string> = new Map();

//     private constructor() {}

//     clean() {
//         this.map = new Map(); 
//     }

//     public static get(): MyMap {
//         if (!MyMap.instance) {
//             MyMap.instance = new MyMap();
//         }
//         return MyMap.instance; 
//     }
// }

// class Service1 {
//     addMap(key: number, value: string) {
//         const myMap = MyMap.get();
//         myMap.map.set(key, value);
//     } 
// }


// class Service2 {
//     getKeys(key: number) {
//         const myMap = MyMap.get();
//         console.log(myMap.map.get(key));
//         myMap.clean();
//         console.log(myMap.map.get(key));
//     }
// }

// new Service1().addMap(1, "Работает");
// new Service2().getKeys(1);


// PROTOTYPE

// interface Prototype<T> {
//     clone(): T;
// }

// class UserHistory implements Prototype<UserHistory> {
//     createdAt: Date;

//     constructor (public email: string, public name: string) {
//         this.createdAt = new Date();
//     }

//     clone(): UserHistory {
//         let target = new UserHistory(this.email, this.name);
//         target.createdAt = this.createdAt;
//         return target;
//     };
// }


// let userMan = new UserHistory("a@a.ru", 'Владимир');
// console.log(userMan);
// let userMan2 = userMan.clone();
// console.log(userMan2);


// BUILDER

enum ImageFormat {
    Png = 'png',
    Jpeg = 'jpeg'
}


interface IResolution {
    width: number;
    height: number;
}


interface IImageConversion extends IResolution {
    format: ImageFormat;
}

class ImageBuilder {
    private formats: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

    addPng() {
        if (this.formats.indexOf(ImageFormat.Png) !== -1) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }

    addJpeg() {
        if (this.formats.indexOf(ImageFormat.Jpeg) !== -1) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({width, height});
        return this;
    }
    
    build(): IImageConversion[] {
        const res: IImageConversion[] = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height,
                });
            }
        }
        return res;
    }
}

console.log(new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build());