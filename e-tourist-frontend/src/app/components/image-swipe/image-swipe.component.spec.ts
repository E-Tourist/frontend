import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSwipeComponent } from './image-swipe.component';

describe('ImageSwipeComponent', () => {
  let component: ImageSwipeComponent;
  let fixture: ComponentFixture<ImageSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSwipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
