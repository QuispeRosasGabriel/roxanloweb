import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupertextComponent } from './supertext.component';

describe('SupertextComponent', () => {
  let component: SupertextComponent;
  let fixture: ComponentFixture<SupertextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupertextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
