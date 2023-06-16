import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendProfileBoxComponent } from './friend-profile-box.component';

describe('FriendProfileBoxComponent', () => {
  let component: FriendProfileBoxComponent;
  let fixture: ComponentFixture<FriendProfileBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendProfileBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendProfileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
