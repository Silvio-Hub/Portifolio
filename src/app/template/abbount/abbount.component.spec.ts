import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbountComponent } from './abbount.component';

describe('AbbountComponent', () => {
  let component: AbbountComponent;
  let fixture: ComponentFixture<AbbountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
