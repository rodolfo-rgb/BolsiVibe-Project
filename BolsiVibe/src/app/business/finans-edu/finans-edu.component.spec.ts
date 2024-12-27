import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansEduComponent } from './finans-edu.component';

describe('FinansEduComponent', () => {
  let component: FinansEduComponent;
  let fixture: ComponentFixture<FinansEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinansEduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinansEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
