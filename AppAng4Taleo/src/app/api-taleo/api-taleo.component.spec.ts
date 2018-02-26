import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTaleoComponent } from './api-taleo.component';

describe('ApiTaleoComponent', () => {
  let component: ApiTaleoComponent;
  let fixture: ComponentFixture<ApiTaleoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTaleoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTaleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
