import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertableComponent } from './overtable.component';

describe('OvertableComponent', () => {
  let component: OvertableComponent;
  let fixture: ComponentFixture<OvertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
