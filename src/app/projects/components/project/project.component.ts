import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../../data/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectInfo: IProject =  { 'name': 'card', 'image': 'card.JPG', 'description': 'This is the project description' } ;

  details = 'This is the project description.' ;

  constructor() { }

  ngOnInit(): void {
  }

  getProjectImage(image: string) : string {
    const url = '/assets/images/projects/' + image ;
    const imageCss =  `url("${url}")` ;
    return imageCss ;
  }


}
