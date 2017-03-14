import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule }    from '@angular/router';

import 'rxjs/Rx'; //Load all features

import { AppComponent }  from './app.component';
import { EventListComponent} from './events/event-list.component';
import { EventDetailComponent} from './events/event-detail.component';
import { EventFilterPipe} from './events/event-filter.pipe';
import { ThumbComponent } from './shared/thumb.component';
import { WelcomeComponent } from './home/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'events', component: EventListComponent },
  { path: 'event/:id', component: EventDetailComponent }
]

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: //all components declared here
  [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    EventFilterPipe,
    ThumbComponent,
    WelcomeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
