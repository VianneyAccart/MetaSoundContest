import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsRankComponent } from './instruments-rank.component';

describe('InstrumentsRankComponent', () => {
  let component: InstrumentsRankComponent;
  let fixture: ComponentFixture<InstrumentsRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentsRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
