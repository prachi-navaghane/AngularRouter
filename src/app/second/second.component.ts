import { OnDestroy } from '@angular/core/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {
  subParam: Subscription;
  queryMyName :string;
  idUrl: string;
  subQueryParams : Subscription;
  constructor(private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // this.idUrl = this.activeRoute.snapshot.params['id'];
    this.subParam = this.activeRoute.params.subscribe(params => this.idUrl = params['id']);
    this.subQueryParams = this.router.routerState.root.queryParams.subscribe(qParams => this.queryMyName = qParams['myName']);
  }

  public ngOnDestroy(): void {
    this.subParam.unsubscribe();
    this.subQueryParams.unsubscribe();
  }
}
