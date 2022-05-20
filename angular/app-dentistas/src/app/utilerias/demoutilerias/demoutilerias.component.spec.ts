import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoutileriasComponent } from './demoutilerias.component';

describe('DemoutileriasComponent', () => {
  let component: DemoutileriasComponent;
  let fixture: ComponentFixture<DemoutileriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoutileriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoutileriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
