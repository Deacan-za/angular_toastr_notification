Angular2 User Notification Toastr

## Demo
http://deropsdevhr01:8767/#/home

## Dependencies

`rxjs`


## Install
npm install --save angular2-notifcations

Then include the `angular2-notifcations` in your project.

Using [SystemJS](https://github.com/systemjs/systemjs), you can add a mapping to your `System.config`:

### Method 1
```javascript
System.config({
    defaultJSExtensions: true,
    map: {
        'angular2-notifcations': 'node_modules/angular2-notifcations'
    }
});
```
### Method 2 - OpsDev Angular 2 Seed
 In tools/config/project.config.ts, inside the ProjectConfig class:

```javascript
constructor() {

    this.SYSTEM_CONFIG_DEV.paths['angular2-notifcations'] =
      `${this.APP_BASE}node_modules/angular2-notifcations/angular2-notifcations`;
}
```


Then include the module in the `imports` collection of your app's module:

```typescript
import { NgModule } from '@angular/core';
import { NotificationsModule } from 'angular2-notifcations/angular2-notifcations';

@NgModule({
    imports: [ NotificationsModule ]
    ...
})
export class MyAppModule { }
```

## API

### NotificationsService

#### Methods

- `add(notification: Notification): void`
    - this.notificationService.add(new Notification(userMessage)); 
    - new Notification(userMessage)
        * creates new Notification object
        * subscribes to the noteAdded stream in the notification service
    -  this.notificationService.add()
        * fires the next method on the notifications stream. 

### NotificationsComponent
#### Methods

- `hide(note: Notification): void`
    - finds the notification passed in on the local notifications array and removes it.

## Example Usage

### HTML

In your app.componet.html
```html
<jtt-header></jtt-header>
    <div class="clearfix"> </div>
    <div class="page-container">
        <jtt-sidebar></jtt-sidebar>
        <router-outlet></router-outlet>
        <notify-user></notify-user>
    </div>
<jtt-footer></jtt-footer>
```
    
### Shared Module

```typescript
import { NotificationsModule } from './components/user-notifications/notification.module';

@NgModule({
  imports: [NotificationsModule],
  declarations: [],
  exports: [NotificationsModule],
  providers: [NotificationsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
```

### Use in component or service
```typescript
import { NotificationsService } from '../components/user-notifications/notifier.service';
import { Notification } from '../components/user-notifications/notification.model';

 public handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);

        let userMessage: Notification = new Notification({
            type: 'Error',
            message: errMsg
        });

        this.notificationService.add(new Notification(userMessage));

        return Observable.throw(errMsg);
    }

```

## Bugs/Contributions

@JunaidK
