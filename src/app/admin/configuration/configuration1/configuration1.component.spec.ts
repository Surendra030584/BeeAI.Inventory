import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Configuration1Component } from './configuration1.component';

describe('Configuration1Component', () => {
  let component: Configuration1Component;
  let fixture: ComponentFixture<Configuration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Configuration1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Configuration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
