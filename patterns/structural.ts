// BRIDGE


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

// class KVDatabase {
//     protected db: Map<string, string> = new Map();
//     save(key: string, value: string) {
//         this.db.set(key, value);
//     }
// }

// class PersistentDatabase {
//     savePersistent(data: Object) {
//         console.log(data);
//     }
// }


// class PersistentDBAdapter extends KVDatabase {
//     constructor (public database: PersistentDatabase) {
//         super();
//     }

//     override save(key: string, value: string): void {
//         this.database.savePersistent({ key, value });
//     }
// }


// function run(db: KVDatabase) {
//     db.save('newKey', 'newValue');
// }

// run(new PersistentDBAdapter(new PersistentDatabase()));


// PROXY

