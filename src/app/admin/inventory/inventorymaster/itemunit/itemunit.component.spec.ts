import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemunitComponent } from './itemunit.component';

describe('ItemunitComponent', () => {
  let component: ItemunitComponent;
  let fixture: ComponentFixture<ItemunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemunitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
