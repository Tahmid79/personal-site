import { Component, OnInit, Input } from '@angular/core';
import { ISkill } from '../../../data/skills';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss']
})
export class SkillBoxComponent implements OnInit {
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
