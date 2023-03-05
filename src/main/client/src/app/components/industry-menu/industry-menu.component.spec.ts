import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryMenuComponent } from './industry-menu.component';

describe('IndustryMenuComponent', () => {
  let component: IndustryMenuComponent;
  let fixture: ComponentFixture<IndustryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
