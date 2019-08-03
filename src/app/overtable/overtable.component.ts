import { Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface classTable {
  serial_no : number;
  name: string;
  last_evaluation: boolean;
  last_check_in: string;
  collaboration: string;
  communication: string;
  problem_solving: string;
  group_discussion: string;
}

const ELEMENT_DATA: classTable[] = [
  {serial_no: 1, name: 'Ariana Campbell',last_evaluation : false, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 2, name: 'Dan Smith',last_evaluation : true, last_check_in: 'Jun 15th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 3, name: 'Max Goldstein',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 4, name: 'Paige Voss',last_evaluation : true, last_check_in: 'Jun 2nd', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 5, name: 'Sawyer Strong',last_evaluation : false, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 6, name: 'Sam Smiley',last_evaluation : false, last_check_in: 'Jun 18th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 7, name: 'Eadric Granok',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Fair', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 8, name: 'Darby Gillett',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Needs work', group_discussion : '20% more'},
  {serial_no: 9, name: 'Isabell Plotsker',last_evaluation : false, last_check_in: 'Jun 15th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 10, name: 'Chris Campbell',last_evaluation : true, last_check_in: 'Jun 8th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 11, name: 'Chris Xie',last_evaluation : true, last_check_in: 'Jun 13th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
  {serial_no: 12, name: 'Erika Welda',last_evaluation : true, last_check_in: 'Jun 18th', collaboration: 'Good', communication :  'Good', problem_solving : 'Good', group_discussion : '20% more'},
];

@Component({
  selector: 'app-overtable',
  templateUrl: './overtable.component.html',
  styleUrls: ['./overtable.component.css']
})
export class OvertableComponent implements OnInit {

  displayedColumns: string[] = ['serial_no', 'name', 'last_evaluation', 'last_check_in','collaboration', 'communication', 'problem_solving', 'group_discussion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  

  ngOnInit() {

    this.dataSource.sort = this.sort;
  }

}
