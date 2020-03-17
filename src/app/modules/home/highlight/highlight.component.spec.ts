import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { HighlightComponent } from './highlight.component';

/* MOCKS */
import { MockSvgIconComponent } from '@core/mocks/svg-icon.mock';


describe('HighlightComponent', () => {
  let component: HighlightComponent;
  let fixture: ComponentFixture<HighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HighlightComponent,
        MockSvgIconComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightComponent);
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
