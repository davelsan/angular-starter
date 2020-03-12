import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSvgComponent } from './app-svg.component';

describe('AppSvgComponent', () => {
  let component: AppSvgComponent;
  let fixture: ComponentFixture<AppSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
