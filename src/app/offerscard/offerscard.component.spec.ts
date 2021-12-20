/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OfferscardComponent } from './offerscard.component';

describe('OfferscardComponent', () => {
  let component: OfferscardComponent;
  let fixture: ComponentFixture<OfferscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
