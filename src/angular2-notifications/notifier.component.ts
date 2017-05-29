import { Component } from '@angular/core';

import { NotificationsService } from './notifier.service';
import { Notification } from './notification.model';

@Component({
  moduleId: module.id,
  selector: 'notify-user',
  templateUrl: 'notifier.component.html',
  styleUrls: ['notification.component.css']
})

export class NotificationsComponent {

  private notes: Notification[];

  constructor(private notifications: NotificationsService) {
    this.notes = new Array<Notification>();

    notifications.noteAdded.subscribe((note: Notification) => {

      note.displayClass = this.mapClassToType(note.type);
      this.notes.push(note);

      // setTimeout(() => { this.hide.bind(this)(note); }, 5000);
    });
  }

  hide(note: Notification) {
    let index = this.notes.indexOf(note);

    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }

  mapClassToType(type: string) {
    let displayClass: string = '';
    switch (type) {
      case 'Error':
        displayClass = 'toast-error';
        break;
      case 'Info':
        displayClass = 'toast-info';
        break;
      case 'Warning':
        displayClass = 'toast-warning';
        break;
      case 'Success':
        displayClass = 'toast-success';
        break;
    }
    return displayClass;
  }

}
