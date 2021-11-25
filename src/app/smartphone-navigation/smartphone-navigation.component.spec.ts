import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneNavigationComponent } from './smartphone-navigation.component';

describe('SmartphoneNavigationComponent', () => {
  let component: SmartphoneNavigationComponent;
  let fixture: ComponentFixture<SmartphoneNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphoneNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
