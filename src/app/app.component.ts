import { Component } from '@angular/core';
import studentsData from '../assets/students.json';
import resumeData from '../assets/resume.json';


interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  

interface Experience {
  title : String;
  name : String; 
  description: String;
}

interface Project {
  name : String; 
  description: String;
}

interface Resume {
  fullName:String; 
  address: String; 
  email: String; 
  github:String;
  mobileNo:String; 
  description:String; 
  workProfile: Experience[];
  personalProjects: Project[];
  languages: String[];
  interest: String[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app'; 
  students: Student[] = studentsData; 
  resume: Resume = resumeData[0];  
}
