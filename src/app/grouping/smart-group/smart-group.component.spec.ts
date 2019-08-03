import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGroupComponent } from './smart-group.component';

describe('SmartGroupComponent', () => {
  let component: SmartGroupComponent;
  let fixture: ComponentFixture<SmartGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
