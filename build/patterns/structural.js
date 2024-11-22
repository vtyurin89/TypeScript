"use strict";
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
class CustomNotification {
    send(template, to) {
        console.log(`Отправляю ${template}: ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            {
                name: 'other',
                template: `<h1>Шаблон</h1>`
            }
        ];
    }
    getByName(name) {
        return this.templates.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notification = new CustomNotification();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('Шаблон не найден!');
            return;
        }
        this.notification.send(data.template, to);
        this.logger.log('Шаблон отправлен');
    }
}
const s = new NotificationFacade();
s.send('a@a.ru', 'other');
