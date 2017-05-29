import { NgModule } from '@angular/core';

import { NotificationsComponent } from './notifier.component';
import { NotificationsService } from './notifier.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [NotificationsComponent],
  declarations: [NotificationsComponent],
  providers: [NotificationsService],
})

export class NotificationsModule { }
