import { Component, OnInit } from '@angular/core';
import { Topic, Description, GithubLink, DriveLink } from '../../../data/dissertation';

@Component({
  selector: 'app-dissertation-main',
  templateUrl: './dissertation-main.component.html',
  styleUrls: ['./dissertation-main.component.scss']
})
export class DissertationMainComponent implements OnInit {
  undergraduate_dissertation = 'Undergraduate Dissertation' ;
  topic_title = 'Topic' ;
  topic = Topic ;

  
  constructor() { }

  ngOnInit(): void {
  }

}
