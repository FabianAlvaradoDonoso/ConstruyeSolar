import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaPage } from './temperatura.page';

describe('TemperaturaPage', () => {
  let component: TemperaturaPage;
  let fixture: ComponentFixture<TemperaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
