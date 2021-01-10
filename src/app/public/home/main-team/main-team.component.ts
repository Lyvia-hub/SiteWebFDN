import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-team',
  templateUrl: './main-team.component.html',
  styleUrls: ['./main-team.component.sass']
})
export class MainTeamComponent implements OnInit {

  tabActived: number

  constructor() {
    this.tabActived = 1
  }

  ngOnInit(): void {
  }

  changeTab(event:any, tabToActive:number) {
    event.preventDefault()
    if(this.tabActived !== tabToActive) this.tabActived = tabToActive;
    return false;
  }

}
