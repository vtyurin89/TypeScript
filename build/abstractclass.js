"use strict";
// abstract class Controller {
//     abstract handle(req: any): void;
//     handleWithLogs(req: any) {
//         console.log('Start');
//         this.handle(req);
//         console.log('End');
//     }
// }
// class UserController extends Controller {
//     handle(req: any): void {
//         console.log(req);
//     }
// }
// let x = new UserController();
// x.handleWithLogs('sis');
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class LoggerWithDate extends Logger {
    log(message) {
        console.log(message);
    }
    ;
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
let lgr = new LoggerWithDate();
lgr.logWithDate("Hello");
