import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownComponent } from './countdown.component';

describe('CountdownComponent', () => {
  let component: CountDownComponent;
  let fixture: ComponentFixture<CountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
