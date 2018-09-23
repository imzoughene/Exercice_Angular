import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTacheComponent } from './new-tache.component';

describe('NewTacheComponent', () => {
  let component: NewTacheComponent;
  let fixture: ComponentFixture<NewTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
