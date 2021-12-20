/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TourcardComponent } from './tourcard.component';

describe('TourcardComponent', () => {
  let component: TourcardComponent;
  let fixture: ComponentFixture<TourcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
