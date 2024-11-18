// enum PaymentStatus {
//     ON_HOLD = 1,
//     PROCESSED = 2,
//     FAILED = 3
// }

// class Payment {
//     id: number;
//     status: PaymentStatus;
//     createdAt: Date;
//     updatedAt: Date | undefined;

//     constructor(id: number) {
//         this.id = id;
//         this.status = PaymentStatus.ON_HOLD;
//         this.createdAt = new Date();
//     }

//     getPaymentLifeTime(): number {
//         return new Date().getTime() - this.createdAt.getTime();
//     }

//     unholdPayment(): void {
//         if (!(this.status == PaymentStatus.PROCESSED) && !(this.status == PaymentStatus.FAILED)) {
//             this.status = PaymentStatus.PROCESSED;
//             this.updatedAt = new Date(); 
//         } else {
//             throw new Error("Ошибка при обновлении платежа!");
//         }
//     }
// }


// let p = new Payment(13);
// setTimeout(() => {
//     let res = p.getPaymentLifeTime();
//     p.unholdPayment();
//     console.log(p);
// }, 2000);


// class User {
//     skills: string[];

//     constructor(skills?: string[]) {
//         this.skills = [];
//         if (skills) {
//             this.skills = skills;
//         }
//     }

//     addSkill(newskill: string | string[]): void {
//         if(typeof newskill === 'string') {
//             this.skills.push(newskill);
//         } else {
//             this.skills = this.skills.concat(newskill);
//         }
//     }
// }

// let user = new User();
// user.addSkill('балаболить');
// user.addSkill(['играть', 'спать', 'кататься на велосипеде']);
// console.log(user.skills);