import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { AppHomeComponent } from './app-home.component';

/* DEPENDENCIES */
import { AppSvgComponent } from '@shared/app-svg/app-svg.component';


describe('AppHomeComponent', () => {
  let component: AppHomeComponent;
  let fixture: ComponentFixture<AppHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppHomeComponent,
        AppSvgComponent,
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
