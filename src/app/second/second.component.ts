import { OnDestroy } from '@angular/core/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {
  subParam: Subscription;
  idUrl: string;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.idUrl = this.activeRoute.snapshot.params['id'];
    this.subParam = this.activeRoute.params.subscribe(params => this.idUrl = params['id']);
  }

  public ngOnDestroy(): void {
    this.subParam.unsubscribe();
  }
}
