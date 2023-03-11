import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoDetailsComponent } from './motto-details.component';

describe('MottoDetailsComponent', () => {
  let component: MottoDetailsComponent;
  let fixture: ComponentFixture<MottoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MottoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MottoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
