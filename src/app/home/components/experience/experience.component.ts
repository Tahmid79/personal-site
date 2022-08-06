import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience_title = 'Experience' ;
  companyName = 'SELISE Digital Platforms' ;
  workingPeriod = '( 2020 - Present )' ;
  jobTitle = 'Software Engineer' ;

  jobDescription = 'Involved in a project to develop features for the software system of Swiss Life Insurance that automates insurance workflows and contains CRM features to keep track of customers and their behavior.' ;
  jobTech = 'Technology' ;
  stackList = 'Angular, Javascript, Typescript, Cypress, Angular Material, SCSS, GraphQL, Liquid Templating Engine, Python, Beautiful Soup' ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
