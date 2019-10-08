import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedadPage } from './humedad.page';

describe('HumedadPage', () => {
  let component: HumedadPage;
  let fixture: ComponentFixture<HumedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
