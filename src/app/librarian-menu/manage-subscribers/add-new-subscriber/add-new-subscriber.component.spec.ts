import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubscriberComponent } from './add-new-subscriber.component';

describe('ManageSubscribersComponent', () => {
  let component: AddNewSubscriberComponent;
  let fixture: ComponentFixture<AddNewSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
