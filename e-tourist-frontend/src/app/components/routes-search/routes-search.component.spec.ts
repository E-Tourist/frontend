import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesSearchComponent } from './routes-search.component';

describe('SearchComponentComponent', () => {
  let component: RoutesSearchComponent;
  let fixture: ComponentFixture<RoutesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
