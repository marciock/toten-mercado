import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInfoComponent } from './ng-info.component';

describe('NgInfoComponent', () => {
  let component: NgInfoComponent;
  let fixture: ComponentFixture<NgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
