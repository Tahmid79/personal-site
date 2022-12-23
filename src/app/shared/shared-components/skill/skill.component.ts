import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from '../../../data/skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skillName = 'Python' ; 
  @Input() image = '' ;

  @Input() skillInfo : ISkill = {name : '' , image: ''} ;

  constructor() { }

  ngOnInit(): void {
  }

  getSkillImage(image: string) : string {
    const url = '/assets/images/tech stack old/' + image ;
    const imageCss =  `url("${url}")` ;
    return imageCss ;
  }

}
