import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-smart-group',
  templateUrl: './smart-group.component.html',
  styleUrls: ['./smart-group.component.css']
})
export class SmartGroupComponent implements OnInit {

  @Input() selectedStudents : any[] = new Array();
  @Input() index : number;

  constructor() { }

  ngOnInit() {
  }

}
