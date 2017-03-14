import { Component } from '@angular/core';
import { EventListComponent} from './events/event-list.component';
import { EventService } from './events/event.service';

@Component({
  selector: 'events-app',
  templateUrl: 'app/app.component.html',
  providers: [EventService]
})

export class AppComponent  {
  pageTitle: string = 'Local Events App';
}
