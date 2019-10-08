import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPage } from './gas.page';

describe('GasPage', () => {
  let component: GasPage;
  let fixture: ComponentFixture<GasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
