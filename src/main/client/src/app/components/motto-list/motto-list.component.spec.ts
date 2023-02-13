import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoListComponent } from './motto-list.component';

describe('MottoListComponent', () => {
  let component: MottoListComponent;
  let fixture: ComponentFixture<MottoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MottoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MottoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
