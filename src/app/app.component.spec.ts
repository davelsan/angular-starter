import { TestBed, async  } from '@angular/core/testing';
import { AppComponent    } from './app.component';
import { AppSvgComponent } from './app-svg/app-svg.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppSvgComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title "angular-tailwind-eslint"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-tailwind-eslint');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(
      element
        .querySelector('.ml-16')
        .textContent
    )
    .toContain('angular-tailwind-eslint app is running!');
  });
});
