import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepersonasComponent } from './detallepersonas.component';

describe('DetallepersonasComponent', () => {
  let component: DetallepersonasComponent;
  let fixture: ComponentFixture<DetallepersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
