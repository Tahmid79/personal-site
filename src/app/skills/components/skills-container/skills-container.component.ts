import { Component, OnInit } from '@angular/core';
import { Skills } from '../../../data/skills';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss']
})
export class SkillsContainerComponent implements OnInit {
  skills = Skills ;
  constructor() { }

  ngOnInit(): void {
  }

}
