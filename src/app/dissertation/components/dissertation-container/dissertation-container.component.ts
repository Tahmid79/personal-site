import { Component, OnInit } from '@angular/core';
import { Topic, Description } from '../../../data/dissertation';

@Component({
  selector: 'app-dissertation-container',
  templateUrl: './dissertation-container.component.html',
  styleUrls: ['./dissertation-container.component.scss']
})
export class DissertationContainerComponent implements OnInit {
  undergraduate_dissertation = 'Undergraduate Dissertation' ;
  topic_title = 'Topic' ;
  topic = Topic ;

  description_title = 'Description' ;
  descriptionObj = Description ;
  descriptionParagraphs: string[] = [] ;

  constructor() { }

  ngOnInit(): void {
    this.par() ;
  }

  par(){
    const paragraphs = Object.values(this.descriptionObj) ;
    this.descriptionParagraphs = paragraphs ;
  }

}
