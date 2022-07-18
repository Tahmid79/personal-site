import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DissertationMainComponent } from './dissertation-main.component';

describe('DissertationMainComponent', () => {
  let component: DissertationMainComponent;
  let fixture: ComponentFixture<DissertationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DissertationMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DissertationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
