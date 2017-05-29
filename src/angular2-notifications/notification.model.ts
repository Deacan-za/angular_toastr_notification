export class Notification {
    type: string;
    message: string;
    displayClass?: string;

    constructor(obj?: Notification) {
        this.type = obj && obj.type || '';
        this.message = obj && obj.message || '';
        this.displayClass = obj && obj.displayClass || '';
    }
}
