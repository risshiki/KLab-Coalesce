import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-groupcard',
  template: `
  <div id="groupcard">
      <div id="contentInside" *ngFor="let container of containers"></div>
  </div>
  `
})

export class GroupcardComponent implements OnInit {

  containers = []
  constructor() { }

  ngOnInit() {
  }

  add_group()
  {
    this.containers.push(this.containers.length);
  }

}
