import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../data/dissertation';

@Component({
  selector: 'app-dissertation-container',
  templateUrl: './dissertation-container.component.html',
  styleUrls: ['./dissertation-container.component.scss']
})
export class DissertationContainerComponent implements OnInit {
  undergraduate_dissertation = 'Undergraduate Dissertation' ;
  topic_title = 'Topic' ;
  topic = Topic ;

  constructor() { }

  ngOnInit(): void {
  }

}
