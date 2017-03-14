import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import 'rxjs/Rx'; //Load all features

import { AppComponent }  from './app.component';
import { EventListComponent} from './events/event-list.component';
import { EventFilterPipe} from './events/event-filter.pipe';
import { ThumbComponent } from './shared/thumb.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, EventListComponent, EventFilterPipe, ThumbComponent ], //all components declared here
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
