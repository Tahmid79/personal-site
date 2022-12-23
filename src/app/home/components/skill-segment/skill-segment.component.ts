import { Component, OnInit } from '@angular/core';
import { ISkill, Skills } from '../../../data/skills';

@Component({
  selector: 'app-skill-segment',
  templateUrl: './skill-segment.component.html',
  styleUrls: ['./skill-segment.component.scss']
})
export class SkillSegmentComponent implements OnInit {
  skill_segment_title = 'Skills' ;
  AllSkills = Skills ;
  skills: ISkill[] = [] ;
  constructor() { }

  ngOnInit(): void {
    for(let i = 0 ; i < 4 ; i++){
        this.skills.push( this.AllSkills[i] ) ;     
    }
  }
}
