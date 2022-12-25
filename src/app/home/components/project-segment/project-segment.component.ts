import { Component, OnInit } from '@angular/core';
import { IProject, Projects } from '../../../data/projects';

@Component({
  selector: 'app-project-segment',
  templateUrl: './project-segment.component.html',
  styleUrls: ['./project-segment.component.scss']
})
export class ProjectSegmentComponent implements OnInit {
  project_segment_title = 'Projects' ;
  projectDir = '/assets/images/projects/' ;
  AllProjects: IProject[] = Projects ;
  projects: IProject[] = [] ;

  linksTitle = 'Links' ;
  links = ['github.png' , 'demo.png'] ;
  linkDir = '/assets/images/' ;

  techTitle = 'Technology' ;

  stackList = 'Angular, Javascript, Typescript, Cypress, Angular Material' ;

  constructor() { }

  ngOnInit(): void {
    for(let i = 0 ; i < 3 ; i++){
      this.projects.push( this.AllProjects[i] ) ; 
    }
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
