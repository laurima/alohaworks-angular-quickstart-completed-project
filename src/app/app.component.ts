import { Component } from '@angular/core';
import { EventService } from './events/event.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'events-app',
  templateUrl: 'app/app.component.html',
  providers: [EventService]
})

export class AppComponent  {
  pageTitle: string = 'Local Events App';
}
