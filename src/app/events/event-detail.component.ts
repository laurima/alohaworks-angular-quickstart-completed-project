import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'app/events/event-detail.component.html'
})

export class EventDetailComponent {
    pageTitle: string = 'Event Detail';
    routeData: string;
    sub: any;

    constructor(private _route: ActivatedRoute, private router: Router) {

 }

 //TODO
 ngOnInit() {
   this.sub = this._route
     .data
     .subscribe(v => console.log(v));
 }
}
