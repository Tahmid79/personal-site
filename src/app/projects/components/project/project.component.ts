import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../../data/projects';
import { Skills } from '../../../data/skills';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectInfo: IProject =  { 'name': 'card', 'image': 'card.JPG', 'description': 'This is the project description', 'technology' : [], 'githubLink' : '' , 'demoLink' : '' } ;
  projectDir = '/assets/images/projects/' ;
  linkDir = '/assets/images/' ;
  skillsDir = '/assets/images/tech stack old/' ;

  skills = Skills ;
  tech = 'Technology' ;

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

  getTechStack(stack: string[]): string {
    let result = '' ;
    for(let i = 0 ; i < stack.length ; i++){
      const item = stack[i] ;
      if(i == stack.length - 1 ){
        result += item ;
      }else{
        result += item + ', '
      }
    }
    return result ;
  }

  openLink(link : string){
    window.open(link, '_blank');
  }

  isLinkValid(link : string) : boolean {
    return link !== null && link !== '' ;
  }


}
