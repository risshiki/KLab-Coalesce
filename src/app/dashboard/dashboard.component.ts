import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentlist : Array<string>;
  showSomething : boolean;

  

  constructor() { }

  // toggleShowme()
  // {
  //   this.showSomething = !this.showSomething;
  // }
  ngOnInit() {
    // this.studentlist = new Array<string>();
    // this.showSomething = false;
    // this.dataSource.sort = this.sort;

  }

}
