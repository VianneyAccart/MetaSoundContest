import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsVoteComponent } from './instruments-vote.component';

describe('InstrumentsVoteComponent', () => {
  let component: InstrumentsVoteComponent;
  let fixture: ComponentFixture<InstrumentsVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentsVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
