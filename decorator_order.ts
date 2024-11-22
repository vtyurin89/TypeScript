function Uni(name: string): any {
    console.log(`Инициализация ${name}`);
    return function () {
        console.log(`Вызов ${name}`);
    }
}


@Uni('Класс')
class MyClass {
    @Uni('Свойство')
    props?: any;

    @Uni('Статик свойство')
    static prop2?: any;

    // @Uni('Метод')
    // static method(@Uni('Параметр метода') _: any) {
    //     return 1;
    // }

    // @Uni('Метод')
    // method (@Uni('Параметр метода') _: any) {
    // }

    // constructor(@Uni('Параметр конструктора') _: any) {
    // }

}

const cls = new MyClass();