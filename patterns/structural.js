// BRIDGE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface IProvider {
//     sendMessage(message: string): void;
//     connect<T>(config: T): void;
//     disconnect(): void;
// }
// class TelegramProvider implements IProvider {
//     sendMessage(message: string): void {
//         console.log(message);
//     }
//     connect<T>(config: T): void {
//         console.log(config);
//     };
//     disconnect(): void {
//         console.log("DISCONNECTED from telegram");
//     };
// }
// class WhatsAppProvider implements IProvider {
//     sendMessage(message: string): void {
//         console.log(message);
//     }
//     connect<T>(config: T): void {
//         console.log(config);
//     };
//     disconnect(): void {
//         console.log("DISCONNECTED from whatsapp");
//     };
// }
// class NotificationSender {
//     constructor(protected provider: IProvider) {}
//     send(): void {
//         this.provider.connect('connect');
//         this.provider.sendMessage('message');
//         this.provider.disconnect();
//     }
// }
// class DelayedNotificationSender extends NotificationSender {
//     constructor (protected provider: IProvider) {
//         super(provider);
//     }
//     sendDelayed() {
//     }
// }
// const sender = new NotificationSender(new TelegramProvider());
// sender.send();
// const sender2 = new NotificationSender(new WhatsAppProvider());
// sender2.send();
// FACADE
// class CustomNotification {
//     send(template: string, to: string) {
//         console.log(`Отправляю ${template}: ${to}`);
//     }
// }
// class Log {
//     log(message: string) {
//         console.log(message);
//     }
// }
// class Template {
//     private templates = [
//         {
//             name: 'other',
//             template: `<h1>Шаблон</h1>`
//         }
//     ];
//     getByName(name: string) {
//         return this.templates.find(t => t.name === name)
//     }
// }
// class NotificationFacade {
//     private notification: CustomNotification;
//     private logger: Log;
//     private template: Template;
//     constructor() {
//         this.notification = new CustomNotification();
//         this.logger = new Log();
//         this.template = new Template();
//     }
//     send ( to: string, templateName: string ): void {
//         const data = this.template.getByName(templateName);
//         if (!data) {
//             this.logger.log('Шаблон не найден!');
//             return;
//         }
//         this.notification.send(data.template, to);
//         this.logger.log('Шаблон отправлен');
//     }
// }
// const s = new NotificationFacade();
// s.send('a@a.ru', 'other');
// ADAPTER
var KVDatabase = /** @class */ (function () {
    function KVDatabase() {
        this.db = new Map();
    }
    KVDatabase.prototype.save = function (key, value) {
        this.db.set(key, value);
    };
    return KVDatabase;
}());
var PersistentDatabase = /** @class */ (function () {
    function PersistentDatabase() {
    }
    PersistentDatabase.prototype.savePersistent = function (data) {
        console.log(data);
    };
    return PersistentDatabase;
}());
var PersistentDBAdapter = /** @class */ (function (_super) {
    __extends(PersistentDBAdapter, _super);
    function PersistentDBAdapter(database) {
        var _this = _super.call(this) || this;
        _this.database = database;
        return _this;
    }
    PersistentDBAdapter.prototype.save = function (key, value) {
        this.database.savePersistent({ key: key, value: value });
    };
    return PersistentDBAdapter;
}(KVDatabase));
function run(db) {
    db.save('newKey', 'newValue');
}
run(new PersistentDBAdapter(new PersistentDatabase()));
//
