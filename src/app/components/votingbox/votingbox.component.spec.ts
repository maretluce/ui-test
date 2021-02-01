import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingboxComponent } from './votingbox.component';

describe('VotingboxComponent', () => {
  let component: VotingboxComponent;
  let fixture: ComponentFixture<VotingboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
