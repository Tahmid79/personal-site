import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSegmentComponent } from './skill-segment.component';

describe('SkillSegmentComponent', () => {
  let component: SkillSegmentComponent;
  let fixture: ComponentFixture<SkillSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
