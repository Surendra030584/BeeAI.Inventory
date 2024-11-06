import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcreationComponent } from './itemcreation.component';

describe('ItemcreationComponent', () => {
  let component: ItemcreationComponent;
  let fixture: ComponentFixture<ItemcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemcreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
