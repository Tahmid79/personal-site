import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education_title = 'Education' ;
  degree = 'BSc(Honours) Computer Science' ;
  accreditation = '* Course accredited by British Computer Society' ;
  constructor() { }

  ngOnInit(): void {
  }
  
}
