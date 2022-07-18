import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DissertationContainerComponent } from './dissertation-container.component';

describe('DissertationContainerComponent', () => {
  let component: DissertationContainerComponent;
  let fixture: ComponentFixture<DissertationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DissertationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DissertationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
