import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteListSingleRouteComponent } from './route-list-single-route.component';

describe('RouteListSingleRouteComponent', () => {
  let component: RouteListSingleRouteComponent;
  let fixture: ComponentFixture<RouteListSingleRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteListSingleRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteListSingleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
