// class User {
//     name: string = 'user';

//     constructor() {
//         console.log(this.name);
//     }
// }

// class Admin extends User {
//     name: string = 'admin';

//     constructor() {
//         super();
//         console.log(this.name);
//     }
// }

// new Admin();


// class  Product {
//     id: number;
//     name: string;
//     price: number;

//     constructor(id: number, name: string, price: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }


// class Delivery {
//     constructor (public date: Date) {
//     }
// }

// class HomeDelivery extends Delivery {
//     constructor (date: Date, public address: string) {
//          super(date);
//     }
// }

// class ShopDelivery extends Delivery {
//     constructor (date: Date, public shopId: number) {
//         super(new Date());
//         this.shopId = shopId;
//     }
// }

// type DeliveryOptions = HomeDelivery | ShopDelivery;

// class Cart {
//     private productList: Product[] = [];
//     private delivery: DeliveryOptions;

//     constructor(delivery: DeliveryOptions) {
//         this.delivery = delivery;
//     }

//     public addProduct(product: Product): void {
//         this.productList.push(product);
//     }

//     public deleteProductById(id: number): void {
//         this.productList = this.productList.filter((product: Product) => product.id != id);
//     }

//     public getTotalPrice(): number {
//         return this.productList
//             .map((product: Product) => product.price)
//             .reduce((price1, price2) => price1 + price2);
//     }

//     public selectDelivery(delivery: DeliveryOptions) {
//         this.delivery = delivery;
//     }

//     public checkout() {
//         if (!this.productList.length) {
//             throw new Error("Корзина пуста!");
//         }
//         if (!this.delivery) {
//             throw new Error("Не выбраны параметры доставки!");
//         }
//         return "All OK";
//     }
// }
// console.log("STARTING TEST");
 