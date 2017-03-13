import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EventListComponent} from './events/event-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EventListComponent ], //all components declared here
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
