import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembagComponent } from './itembag.component';

describe('ItembagComponent', () => {
  let component: ItembagComponent;
  let fixture: ComponentFixture<ItembagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItembagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItembagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
