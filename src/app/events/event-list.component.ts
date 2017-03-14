import { Component, OnInit} from '@angular/core';
import { IEvent } from './event';
import { EventFilterPipe } from './event-filter.pipe';
import { EventService } from './event.service';

@Component({
  selector: 'el-events',
  templateUrl: 'app/events/event-list.component.html',
  styleUrls: ['app/events/event-list.component.css']
})

export class EventListComponent implements OnInit {
  pageTitle: string = 'Event List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  events: IEvent[];

constructor(private _eventService: EventService) {

}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.events = this._eventService.getEvents();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Event List: ' + message;
  }
}
