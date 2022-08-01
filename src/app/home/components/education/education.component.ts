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

  undergad_dissertation_header = 'Undergraduate Dissertation' ;
  undergad_dissertation_title = 'Molecular Classification of Cancer With Gene Expression Monitoring' ;

  constructor() { }

  ngOnInit(): void {
  }
  
}
