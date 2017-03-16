import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

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
 //https://toddmotto.com/angular-component-router
 ngOnInit() {
   this._route.params.subscribe((params) => {this.routeData = params.event})
 }
}
