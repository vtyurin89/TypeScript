// interface User {
//     name: string
// }

//  const a = {};

//  assertUser(a);
//  a.name = "Влад";

//  function assertUser(obj: unknown): asserts obj is User {
//     if (typeof obj === 'object' && !!obj && 'name' in obj) {
//         return;
//     } else {
//         throw new Error("Объект не является пользователем!");
//     }
//  }

// console.log("Все тесты пройдены")