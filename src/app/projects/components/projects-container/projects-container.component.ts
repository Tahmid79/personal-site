import { Component, OnInit } from '@angular/core';
import { Projects } from '../../../data/projects';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {
  projects = Projects ;
  constructor() { }

  ngOnInit(): void {
  }

}
