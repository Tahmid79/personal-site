import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../../data/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectInfo: IProject =  { 'name': 'card', 'image': 'card.JPG', 'description': 'This is the project description' } ;
  projectDir = '/assets/images/projects/' ;
  linkDir = '/assets/images/' ;

  details = 'This is the project description.' ;
  linkTitle = 'Links' ;

  links = ['github.png' , 'demo.png'] ;

  constructor() { }

  ngOnInit(): void {
  }

  getImageCss(image: string, dir: string) : string {
    const url = dir + image ;
    const imageCss =  `url("${url}")` ;
    return imageCss ;
  }


}
