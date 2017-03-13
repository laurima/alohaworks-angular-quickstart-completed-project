import { Component } from '@angular/core';

import { EventListComponent} from './events/event-list.component'

@Component({
  selector: 'events-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent  {
  pageTitle: string = 'Local Events App';
}
