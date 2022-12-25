import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSegmentComponent } from './project-segment.component';

describe('ProjectSegmentComponent', () => {
  let component: ProjectSegmentComponent;
  let fixture: ComponentFixture<ProjectSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
