import { Component, OnInit } from '@angular/core';
import {Student} from './student';
// import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css'],
})




export class GroupingComponent implements OnInit {

  availableStudents: Student[] = new Array<Student>();

  selectedStudents: any[] = new Array();

  draggedStudent: Student;

  numberOfGroups : number;

  group_Placeholder_Container : any[] = new Array();

  header_index : number;

  studentsPerGroup : number;

  groupDesignValues : any [] = new Array();

  toggleInputValue : boolean;

  toggleOverlayGrouping : boolean;

  groupingStrings : any[] = new Array();
  // selectedCategory : string;

  // categories : SelectItem[] = new Array();


  constructor() {
   }

  ngOnInit() {

    this.numberOfGroups = 4;

    this.studentsPerGroup = 4;
    // Header index references the header on student card
    this.header_index = 0;
    this.toggleInputValue = false;
    this.toggleOverlayGrouping = false;

    var dataSource =  [
      { image_source: '', name: 'Ariana Camper',gender : "Female",  collaboration: 'Exemplary', communication :  'Accomplished', problem_solving : 'Developing', group_discussion : 'Accomplished', project_management : 'Accomplished'},
      { image_source: '', name: 'Dan Sawyer', gender : "Male", collaboration: 'Exemplary', communication :  'Exemplary', problem_solving : 'Exemplary', group_discussion : 'Exemplary', project_management : 'Exemplary'},
      { image_source: '', name: 'Max Goldberg', gender : "Male", collaboration: 'Accomplished', communication :  'Developing', problem_solving : 'Developing', group_discussion : 'Exemplary', project_management : 'Accomplished'},
      { image_source: '', name: 'Paige Braun', gender : "Female", collaboration: 'Exemplary', communication :  'Exemplary', problem_solving : 'Exemplary', group_discussion : 'Exemplary', project_management : 'Exemplary'},
      { image_source: '', name: 'Sawyer Sam', gender : "Male", collaboration: 'Accomplished', communication :  'Accomplished', problem_solving : 'Exemplary', group_discussion : 'Developing', project_management : 'Exemplary'},
      { image_source: '', name: 'Sam Leighburg', gender : "Female", collaboration: 'Developing', communication :  'Exemplary', problem_solving : 'Developing', group_discussion : 'Exemplary', project_management : 'Developing'},
      { image_source: '', name: 'Eadric Garrett', gender : "Male", collaboration: 'Accomplished', communication :  'Developing', problem_solving : 'Exemplary', group_discussion : 'Exemplary', project_management : 'Accomplished'},
      { image_source: '', name: 'Darby Pilsner', gender : "Male", collaboration: 'Exemplary', communication :  'Developing', problem_solving : 'Developing', group_discussion : 'Exemplary', project_management : 'Exemplary'},
      { image_source: '', name: 'Isabell Terry', gender : "Female", collaboration: 'Accomplished', communication :  'Exemplary', problem_solving : 'Exemplary', group_discussion : 'Exemplary', project_management : 'Exemplary'},
      { image_source: '', name: 'Chris Jones', gender : "Male", collaboration: 'Exemplary', communication :  'Exemplary', problem_solving : 'Exemplary', group_discussion : 'Exemplary', project_management : 'Accomplished'},
      { image_source: '', name: 'Chris Walker', gender : "Male", collaboration: 'Developing', communication :  'Developing', problem_solving : 'Developing', group_discussion : 'Exemplary', project_management : 'Developing'},
      { image_source: '', name: 'Erika Portman', gender : "Female", collaboration: 'Exemplary', communication :  'Accomplished', problem_solving : 'Accomplished', group_discussion : 'Developing', project_management : 'Exemplary'},
      { image_source: '', name: 'Audrey Farwell', gender : "Female", collaboration: 'Accomplished', communication :  'Exemplary', problem_solving : 'Exemplary', group_discussion : 'Developing', project_management : 'Accomplished'},
      { image_source: '', name: 'Mark Cosinberg', gender : "Male", collaboration: 'Exemplary', communication :  'Developing', problem_solving : 'Accomplished', group_discussion : 'Accomplished', project_management : 'Accomplished'},
      { image_source: '', name: 'Leana Banks', gender : "Female", collaboration: 'Developing', communication :  'Accomplished', problem_solving : 'Exemplary', group_discussion : 'Developing', project_management : 'Exemplary'},
      { image_source: '', name: 'Jon Whittaker', gender : "Female", collaboration: 'Exemplary', communication :  'Developing', problem_solving : 'Developing', group_discussion : 'Accomplished', project_management : 'Exemplary'},
    ];
    
    
    // this.categories =  [
    //   {label:'Select Category', value:null},
    //   {label:'Collaboration', value:1},
    //   {label:'Communication', value:2},
    //   {label:'Problem Solving', value:3},
    //   {label:'Project Management', value:4},
    //   {label:'Group Discussion', value:5}
    // ];
    
    
    
    for (let i = 0;  i < dataSource.length; i++)
    {
      dataSource[i].image_source = '/assets/images/Student' + i.toString() + ".jpeg";
      this.availableStudents[i] = new Student(dataSource[i].image_source, dataSource[i].name, dataSource[i].gender, dataSource[i].collaboration, dataSource[i].problem_solving, dataSource[i].communication, dataSource[i].group_discussion, dataSource[i].project_management);
    }

    for (let i = 0; i < this.numberOfGroups; i++)
    {
      this.group_Placeholder_Container.push(this.group_Placeholder_Container.length);
      this.selectedStudents[i] = new Array<Student>();
      this.groupDesignValues[i]=new Array<any>();
      
    }

    var collaboration_sorted = this.availableStudents.sort((a,b) => a.collaboration.localeCompare(b.collaboration)).reverse();
    var communication_sorted = this.availableStudents.sort((a,b)=> a.communication.localeCompare(b.communication)).reverse();
    var problem_sorted =  this.availableStudents.sort((a,b)=> a.problem.localeCompare(b.problem)).reverse();
    var project_management_sorted = this.availableStudents.sort((a,b) => a.collaboration.localeCompare(b.project_management)).reverse();
    var group_discussion_sorted = this.availableStudents.sort((a,b) => a.group_discussion.localeCompare(b.group_discussion)).reverse();
    this.availableStudents = collaboration_sorted;

    this.groupingStrings =
    [
      {name : "Collaboration", value : collaboration_sorted},
      {name : "Communication", value : communication_sorted},
      {name : "Problem Solving", value : problem_sorted},
      {name : "Project Management", value : project_management_sorted},
      {name : "Group Discussion", value : group_discussion_sorted},
    ];


  }

  // moveStudent(index : number)
  // {
  //   var pusnhToList = this.availableStudents.splice(index,1)[0];
  //   this.selectedStudents.push(pushToList);
    
  // }

  toggleInput()
  {
    this.toggleInputValue = !this.toggleInputValue;
  }

  toggleOverlay(value : boolean)
  {
    if(value == true)
    {
      // Do the sortableJS component here
    }
    this.toggleOverlayGrouping = !this.toggleOverlayGrouping;

    console.log(this.groupingStrings);
  }

  calculate_average(index : number)
  {
    let collaboration_total = 0;
    let communication_total = 0;
    let problem_total = 0;
    let project_management_total = 0;
    let group_discussion_total = 0;

    let group_length = this.selectedStudents[index].length;
    
    for (let i = 0; i < this.selectedStudents[index].length; i++)
    {
      collaboration_total += this.label_to_value(this.selectedStudents[index][i].collaboration);
      communication_total += this.label_to_value(this.selectedStudents[index][i].communication);
      problem_total += this.label_to_value(this.selectedStudents[index][i].problem);
      project_management_total += this.label_to_value(this.selectedStudents[index][i].project_management);
      group_discussion_total += this.label_to_value(this.selectedStudents[index][i].group_discussion);
    }

    let collaboration_average = collaboration_total/ group_length;
    let communication_average = communication_total/ group_length;
    let problem_average = problem_total/ group_length;
    let project_management_average = project_management_total/ group_length;
    let group_discussion_average = group_discussion_total/ group_length;

    this.groupDesignValues[index] = [this.labelDesignValues(collaboration_average), this.labelDesignValues(communication_average), this.labelDesignValues(problem_average), this.labelDesignValues(project_management_average), this.labelDesignValues(group_discussion_average)];
  }

  labelDesignValues(value : number)
  {
    if( value >= 75)
    {
      return "exemplary";
    }

    if (value >= 50 && value < 75)
    {
      return "accomplished"
    }

    else
    {
      return "developing";
    }

  }

  dragStart(event,student: Student) {
    this.draggedStudent = student;
   }

  drop(event, index) {
      if(this.draggedStudent) {
          let draggedStudentIndex = this.findIndex(this.draggedStudent);
          this.selectedStudents[index] = [...this.selectedStudents[index], this.draggedStudent];
          this.availableStudents = this.availableStudents.filter((val,i) => i!=draggedStudentIndex);
          this.draggedStudent = null;
          this.calculate_average(index);
          console.log(this.groupDesignValues[index]);
      }
  }

  dragEnd(event) {
      this.draggedStudent = null;
  }

  findIndex(student: Student) {
      let index = -1;
      for(let i = 0; i < this.availableStudents.length; i++) {
          if(student.name === this.availableStudents[i].name) 
          {
              index = i;
              break;
          }
      }
      return index;
  }

  findGroupIndex(student: Student, ind : number) {
    let index = -1;
    for(let i = 0; i < this.selectedStudents[ind].length; i++) {
        if(student.name === this.selectedStudents[ind][i].name) 
        {
            index = i;
            break;
        }
    }
    return index;
}

removeGroupValue(student : Student, index : number)
  {
    console.log(index);
    let StudentIndex = this.findGroupIndex(student, index);
    console.log(StudentIndex);
    this.availableStudents = [student,...this.availableStudents];
    this.selectedStudents[index] = this.selectedStudents[index].filter((val,i) => i!=StudentIndex); 
    if(this.selectedStudents[index].length == 0)
    {
      this.groupDesignValues[index] = ["","","","",""];
    }
    else
    {
      this.calculate_average(index);
    }
  }

  increment_groups()
  {
    this.numberOfGroups += 1;
    this.selectedStudents[this.numberOfGroups-1] = new Array <Student>();
    this.groupDesignValues[this.numberOfGroups-1] = ["","","","",""];
  }

  label_to_percentage(value : string)
  {
    let return_value = "";

    if (value == "Exemplary")
    {
      return_value = "70%";
    }
    
    
    if (value == "Accomplished")
    {
      return_value = "50%";
    }

    if (value == "Developing")
    {
      return_value = "30%";
    }

    return return_value;

  }

  label_to_value(value : string)
  {
    let return_value = 0;

    if (value == "Exemplary")
    {
      return_value = 100;
    }
    
    
    if (value == "Accomplished")
    {
      return_value = 70;
    }

    if (value == "Developing")
    {
      return_value = 50;
    }

    return return_value;

  }

  shortHand(value : string)
  {
    let return_value = "";

    if (value == "Exemplary")
    {
      return_value = "Exp";
    }
    
    
    if (value == "Accomplished")
    {
      return_value = "Acc";
    }

    if (value == "Developing")
    {
      return_value = "Dev";
    }

    return return_value;
  }

  setAtrributeStyle(value: string)
  {
    return "max width : " + value + ";";
  }

  sortAttributes(value : number)
  {
    let header_style_element = document.getElementsByClassName('group-header-desc') as HTMLCollectionOf<HTMLElement>;
    
    // console.log(value);
    if (value ==  1)
    {
      this.availableStudents.sort((a,b) => a.collaboration.localeCompare(b.collaboration)).reverse();
      this.header_index = 0;
      // console.log(this.header_index);
      
      for(let i = 0; i < header_style_element.length; i++)
      {
        header_style_element[i].style.color = "#A9B9FF";
      }
    }

    if (value ==  2)
    {
      this.availableStudents.sort((a,b) => a.communication.localeCompare(b.communication)).reverse();
      this.header_index = 1;
      // console.log(this.header_index);

      for(let i = 0; i < header_style_element.length; i++)
      {
        header_style_element[i].style.color = "#F47645";
      }
    }
    if (value ==  3)
    {
      this.availableStudents.sort((a,b) => a.problem.localeCompare(b.problem)).reverse();
      this.header_index = 2;

      for(let i = 0; i < header_style_element.length; i++)
      {
        header_style_element[i].style.color = "#F7AA01";
      }
    }
    
    if (value ==  4)
    {
      this.availableStudents.sort((a,b) => a.collaboration.localeCompare(b.project_management)).reverse();
      this.header_index = 3;
      // console.log(this.header_index);

      for(let i = 0; i < header_style_element.length; i++)
      {
        header_style_element[i].style.color = "#7ACFDE";
      }
    }

    if (value ==  5)
    {
      this.availableStudents.sort((a,b) => a.group_discussion.localeCompare(b.group_discussion)).reverse();
      this.header_index = 4;

      for(let i = 0; i < header_style_element.length; i++)
      {
        header_style_element[i].style.color = "#FFA2DD";
        // header_style_element[i].style.animation = "-webkit-animation: fadein 1s; -moz-animation: fadein 1s; -ms-animation: fadein 1s;  -o-animation: fadein 1s; animation: fadein 1s;"
      }

      // console.log(this.header_index);
    }
  }

 labelScore(value : string)
{
    if (value == "Exemplary")
        return "10";
    if (value == "Accomplished")
        return "7.5";
    if (value == "Developing")
        return "5";
}

  smart_grouping()
  {

    for(let i =0; i < this.selectedStudents.length; i++ )
    {
      this.availableStudents = [...this.selectedStudents[i], ...this.availableStudents];
      // console.log(this.availableStudents);
      this.selectedStudents[i] = [];
    }

    // console.log(this.availableStudents);

    var priority_list = []
    for (let i =0; i < this.groupingStrings.length; i++)
    {
      priority_list.push(this.groupingStrings[i].value);
    }

    var class_roster = this.formPriorityGroups(this.availableStudents, this.studentsPerGroup, priority_list);

    for (let i = 0; i < class_roster.length; i++)
    {
      this.selectedStudents[i] = class_roster[i];
      this.calculate_average(i);
    }

    
    this.availableStudents = [];

  }

  
  formPriorityGroups(studentData : Student[], studentsPerGroup : number, priority_list : any[])
  {

        var jsonData = studentData;
        // Segregate male and female participants in roster for grouping
        var male_priority  =  priority_list[0].filter(el => el.gender == "Male");
        var female_priority  = priority_list[0].filter(el => el.gender == "Female");
  
        var priority_2 =  priority_list[1];
        var priority_3 =  priority_list[2];
        var priority_4 = priority_list[3];
        var priority_5 = priority_list[4];
  
        var size_groups = studentsPerGroup;
  
        // Sort groups, then form better groups
  
        // male_priority.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
        // female_priority.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
  
        // // console.log(male_leadership, female_leadership);
        // collaboration.sort((a, b) => parseFloat(this.labelScore(b.collaboration)) - parseFloat(this.labelScore(a.collaboration)));
        // communication.sort((a, b) => parseFloat(this.labelScore(b.communication)) - parseFloat(this.labelScore(a.communication)));
        // problem.sort((a, b) => parseFloat(this.labelScore(b.problem)) - parseFloat(this.labelScore(a.problem)));
  
        // console.log(collaboration, communication, problem);
  
        var class_roster = [];
  
        var roster_size = jsonData.length;
        var no_of_groups = Math.floor(roster_size/size_groups);
  
        this.numberOfGroups = no_of_groups;

        for (let i = 0; i < no_of_groups;i++)
        {
            class_roster.push([]);
        }
  
        // **Grouping begins here**
  
  
        // Set leaders first based on equity
  
        let female_leaders = Math.floor(no_of_groups/2);
  
        let male_leaders = no_of_groups - female_leaders;
  
        let remove_elements_array = [];
  
        console.log(female_leaders);
  
        for(let i = 0; i< female_leaders;i++)
            {
                class_roster[i].push(female_priority.pop());
                remove_elements_array.push(class_roster[i][0].name);
            }
  
        for(let i = female_leaders; i< female_leaders+male_leaders;i++)
            {
                class_roster[i].push(male_priority.pop());
                remove_elements_array.push(class_roster[i][0].name);
            }
  
          console.log(class_roster); 
          console.log(remove_elements_array); 
  
        for (let i in remove_elements_array)
        {
            priority_2 = priority_2.filter(function(el){ return el.name != remove_elements_array[i]; });
            priority_3 = priority_3.filter(function(el){ return el.name != remove_elements_array[i]; });
            priority_4 = priority_4.filter(function(el){ return el.name != remove_elements_array[i]; });
            priority_5 = priority_5.filter(function(el){ return el.name != remove_elements_array[i]; });
        }
  
        // Grouping on other 4 components begins here
  
        let remainder_roster = [priority_2, priority_3, priority_4, priority_5];
  
        var round = 0;
  
        for(let i = 0; i < jsonData.length - female_leaders - male_leaders; i++)
        {
            
            if(round %2 == 0)
            {
              var push_value = remainder_roster[i%4].pop()
              class_roster[(i)%no_of_groups].push(push_value);
              console.log((i)%no_of_groups);
            }
  
            else
            {
              var push_value = remainder_roster[i%4].pop()
              class_roster[(no_of_groups-1)-(i%no_of_groups)].push(push_value);
              console.log((no_of_groups-1)-(i%no_of_groups));
            }
            // Remember that the pool of users is shared, one of these is bound to be redundant
            // But I am too lazy to optimize for something with O(n) complexity to begin with
  
            remainder_roster[0] = remainder_roster[0].filter(function(el){ return el.name != push_value.name });
            remainder_roster[1] = remainder_roster[1].filter(function(el){ return el.name != push_value.name });
            remainder_roster[2] = remainder_roster[2].filter(function(el){ return el.name != push_value.name });
            remainder_roster[3] = remainder_roster[3].filter(function(el){ return el.name != push_value.name });
  
            if(i%no_of_groups ==0 && i!=0)
            {
                round += 1;
            }
  
        }
  
        // console.log(class_roster);
  
        let undecided_class_roster = [];
  
        for (let i in class_roster)
        {   
            if(class_roster[i].length > size_groups)
            {
                undecided_class_roster.push(class_roster[i].pop());
            }
            else
            {
                console.log(class_roster[i].length, size_groups );
            }
        }
  
        console.log(undecided_class_roster);
        var eval_class_roster = [];
  
        for (let i = 0; i < class_roster.length; i++)
        {   
            var roster_total = 0;
            let roster_average = 0;
            var counter = 0;
            for (let j = 0; j< class_roster[i].length; j++)
            {
                let collaboration_score = this.labelScore(class_roster[i][j].collaboration);
                let communication_score = this.labelScore(class_roster[i][j].communication);
                let problem_score = this.labelScore(class_roster[i][j].problem);
                let groupDiscussion_score = this.labelScore(class_roster[i][j].project_management);
                roster_total = roster_total + 0.25*parseFloat(collaboration_score) + 0.25*parseFloat(communication_score) + 0.25*parseFloat(problem_score)+ 0.25*parseFloat(groupDiscussion_score);
                counter += 1;
            }
  
            roster_average = roster_total/counter;
  
            eval_class_roster.push(roster_average);
        }
  
        // console.log(eval_class_roster);
  
        // Find lowest scoring groups and arrange accordingly
  
        let eval_class_roster_sorted = eval_class_roster.slice();
  
        eval_class_roster_sorted.sort();
  
        console.log(eval_class_roster_sorted);
        // console.log(eval_class_roster);
        // console.log(eval_class_roster_sorted);
  
        for( let i = 0 ; i < undecided_class_roster.length; i++)
        {
            let find_this_index = eval_class_roster_sorted[i];
            class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
        }
  
        console.log(class_roster);
        return class_roster;
  }

}



// formGroups(studentData : Student[], studentsPerGroup : number)
// {
    
//       var jsonData = studentData;
//       // Segregate male and female participants in roster for grouping
//       var male_leadership  =  studentData.filter(el => el.gender == "Male");
//       var female_leadership  = studentData.filter(el => el.gender == "Female");

//       var collaboration =  studentData;
//       var problem =  studentData;
//       var communication = studentData;
//       var groupDiscussion = studentData;

//       var size_groups = studentsPerGroup;

//       // Sort groups, then form better groups

//       male_leadership.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));
//       female_leadership.sort((a, b) => parseFloat(this.labelScore(a.project_management)) - parseFloat(this.labelScore(b.project_management)));

//       // console.log(male_leadership, female_leadership);
//       collaboration.sort((a, b) => parseFloat(this.labelScore(b.collaboration)) - parseFloat(this.labelScore(a.collaboration)));
//       communication.sort((a, b) => parseFloat(this.labelScore(b.communication)) - parseFloat(this.labelScore(a.communication)));
//       problem.sort((a, b) => parseFloat(this.labelScore(b.problem)) - parseFloat(this.labelScore(a.problem)));

//       // console.log(collaboration, communication, problem);
//       var class_roster = [];

//       var roster_size = jsonData.length;
//       var no_of_groups = Math.floor(roster_size/size_groups);

//       this.numberOfGroups = no_of_groups;




//       for (let i = 0; i < no_of_groups;i++)
//       {
//           class_roster.push([]);
//       }
//       // console.log(class_roster);


//       // **Grouping begins here**


//       // Set leaders first based on equity

//       let female_leaders = Math.floor(no_of_groups/2);

//       let male_leaders = no_of_groups - female_leaders;

//       let remove_elements_array = [];

//       console.log(female_leaders);

//       for(let i = 0; i< female_leaders;i++)
//           {
//               class_roster[i].push(female_leadership.pop());
//               remove_elements_array.push(class_roster[i][0].name);
//           }

//       for(let i = female_leaders; i< female_leaders+male_leaders;i++)
//           {
//               class_roster[i].push(male_leadership.pop());
//               remove_elements_array.push(class_roster[i][0].name);
//           }

//         console.log(class_roster); 
//         console.log(remove_elements_array); 

//       for (let i in remove_elements_array)
//       {
//           communication = communication.filter(function(el){ return el.name != remove_elements_array[i]; });
//           collaboration = collaboration.filter(function(el){ return el.name != remove_elements_array[i]; });
//           problem = problem.filter(function(el){ return el.name != remove_elements_array[i]; });
//           groupDiscussion = groupDiscussion.filter(function(el){ return el.name != remove_elements_array[i]; });
//       }

//       // Grouping on other 4 components begins here

//       let remainder_roster = [communication, collaboration, problem, groupDiscussion];

//       var round = 0;

//       for(let i = 0; i < jsonData.length - female_leaders - male_leaders; i++)
//       {
          
//           if(round %2 == 0)
//           {
//             var push_value = remainder_roster[i%4].pop()
//             class_roster[(i)%no_of_groups].push(push_value);
//             console.log((i)%no_of_groups);
//           }

//           else
//           {
//             var push_value = remainder_roster[i%4].pop()
//             class_roster[(no_of_groups-1)-(i%no_of_groups)].push(push_value);
//             console.log((no_of_groups-1)-(i%no_of_groups));
//           }
//           // Remember that the pool of users is shared, one of these is bound to be redundant
//           // But I am too lazy to optimize for something with O(n) complexity to begin with

//           remainder_roster[0] = remainder_roster[0].filter(function(el){ return el.name != push_value.name });
//           remainder_roster[1] = remainder_roster[1].filter(function(el){ return el.name != push_value.name });
//           remainder_roster[2] = remainder_roster[2].filter(function(el){ return el.name != push_value.name });
//           remainder_roster[3] = remainder_roster[3].filter(function(el){ return el.name != push_value.name });

//           if(i%no_of_groups ==0 && i!=0)
//           {
//               round += 1;
//           }

//       }

//       // console.log(class_roster);

//       let undecided_class_roster = [];

//       for (let i in class_roster)
//       {   
//           if(class_roster[i].length > size_groups)
//           {
//               undecided_class_roster.push(class_roster[i].pop());
//           }
//           else
//           {
//               console.log(class_roster[i].length, size_groups );
//           }
//       }

//       console.log(undecided_class_roster);
//       var eval_class_roster = [];

//       for (let i = 0; i < class_roster.length; i++)
//       {   
//           var roster_total = 0;
//           let roster_average = 0;
//           var counter = 0;
//           for (let j = 0; j< class_roster[i].length; j++)
//           {
//               let collaboration_score = this.labelScore(class_roster[i][j].collaboration);
//               let communication_score = this.labelScore(class_roster[i][j].communication);
//               let problem_score = this.labelScore(class_roster[i][j].problem);
//               let groupDiscussion_score = this.labelScore(class_roster[i][j].project_management);
//               roster_total = roster_total + 0.25*parseFloat(collaboration_score) + 0.25*parseFloat(communication_score) + 0.25*parseFloat(problem_score)+ 0.25*parseFloat(groupDiscussion_score);
//               counter += 1;
//           }

//           roster_average = roster_total/counter;

//           eval_class_roster.push(roster_average);
//       }

//       // console.log(eval_class_roster);

//       // Find lowest scoring groups and arrange accordingly

//       let eval_class_roster_sorted = eval_class_roster.slice();

//       eval_class_roster_sorted.sort();

//       for( let i = 0 ; i < undecided_class_roster.length; i++)
//       {
//           let find_this_index = eval_class_roster_sorted[i];
//           class_roster[eval_class_roster.indexOf(find_this_index)].push(undecided_class_roster[i]);
//       }

//       console.log(class_roster);
//       return class_roster;
//   }
