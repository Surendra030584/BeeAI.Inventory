import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcolorComponent } from './itemcolor.component';

describe('ItemcolorComponent', () => {
  let component: ItemcolorComponent;
  let fixture: ComponentFixture<ItemcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemcolorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
