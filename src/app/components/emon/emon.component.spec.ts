import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmonComponent } from './emon.component';

describe('EmonComponent', () => {
  let component: EmonComponent;
  let fixture: ComponentFixture<EmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
