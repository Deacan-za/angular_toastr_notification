import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notification } from './notification.model';

@Injectable()
export class NotificationsService {

  public notifications = new Subject<Notification>();
  public noteAdded = this.notifications.asObservable();

  private notificationTypes: Array<string> = [];

  constructor() {
    this.notificationTypes = [];
    this.notificationTypes.push('Error');
    this.notificationTypes.push('Info');
    this.notificationTypes.push('Warning');
    this.notificationTypes.push('Success');
  }

  public add(notification: Notification) {
    if (this.notificationTypes.includes(notification.type)) {
      this.notifications.next(notification);
    } else {
      console.log('Notification Type does not exist: ' + notification.type);
    }
  }
}
