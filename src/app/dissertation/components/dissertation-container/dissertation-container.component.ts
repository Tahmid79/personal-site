import { Component, OnInit } from '@angular/core';
import { Topic, Description, GithubLink, DriveLink } from '../../../data/dissertation';

@Component({
  selector: 'app-dissertation-container',
  templateUrl: './dissertation-container.component.html',
  styleUrls: ['./dissertation-container.component.scss']
})
export class DissertationContainerComponent implements OnInit {
  linkDir = '/assets/images/' ;
  githubImg = 'github.png' ;
  driveImg = 'google drive.png' ;
  full_dissertation = 'Dissertation' ;

  undergraduate_dissertation = 'Undergraduate Dissertation' ;
  topic_title = 'Topic' ;
  topic = Topic ;

  description_title = 'Description' ;
  descriptionObj = Description ;
  descriptionParagraphs: string[] = [] ;

  codeLinkTitle = 'Code' ;

  githubLink = GithubLink ;
  driveLink = DriveLink ;

  constructor() { }

  ngOnInit(): void {
    this.par() ;
  }

  par(){
    const paragraphs = Object.values(this.descriptionObj) ;
    this.descriptionParagraphs = paragraphs ;
  }

  getImageCss(image: string, dir: string) : string {
    const url = dir + image ;
    const imageCss =  `url("${url}")` ;
    return imageCss ;
  }

  openLink(link : string){
    window.open(link, '_blank');
  }

}
