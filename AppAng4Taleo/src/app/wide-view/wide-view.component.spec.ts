import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WideViewComponent } from './wide-view.component';

describe('WideViewComponent', () => {
  let component: WideViewComponent;
  let fixture: ComponentFixture<WideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
