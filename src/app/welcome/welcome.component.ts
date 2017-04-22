import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  OnBtnClick()
  {
    this.router.navigate(['first']);
  }
  OnSecondBtnClick()
  {
    this.router.navigate(['second', '100']);
  }

}
