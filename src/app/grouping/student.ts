export class Student
{
    image_source : string;
    name : string;
    gender : string;
    collaboration : string;
    communication: string;
    problem : string;
    group_discussion : string;
    project_management : string;
    student_header : any[] = new Array();
    

    constructor(image_source = "blank", name = "blank" ,gender = "blank",collaboration = "blank" , problem = "blank" , communication  = "blank", group_discussion= "blank", project_management= "blank" )
    {
      this.image_source = image_source;
      this.name = name;
      this.gender = gender;
      this.collaboration = collaboration;
      this.communication = communication;
      this.problem =  problem;
      this.group_discussion = group_discussion;
      this.project_management = project_management;
      this.student_header = [this.collaboration, this.communication, this.problem, this.project_management, this.group_discussion];
    }
}
