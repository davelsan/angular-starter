import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input }                 from '@angular/core';
import { AppHomeComponent }                 from './app-home.component';


describe('AppHomeComponent', () => {
  let component: AppHomeComponent;
  let fixture: ComponentFixture<AppHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppHomeComponent,
        MockSvgIconComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "angular-tailwind-eslint"', () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-tailwind-eslint');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.nativeElement;
    expect(
      element
        .querySelector('.ml-16')
        .textContent
    )
    .toContain('angular-tailwind-eslint app is running!');
  });
});

@Component({
  selector: 'svg-icon',
})
class MockSvgIconComponent {
  @Input() name: string;
}