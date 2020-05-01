import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent }                    from 'ng-mocks';

/* COMPONENT */
import { HighlightComponent } from './highlight.component';
import { SvgIconComponent }   from '@shared/component/svg-icon/svg-icon.component';


describe('HighlightComponent', () => {
  let component: HighlightComponent;
  let fixture: ComponentFixture<HighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HighlightComponent,
        MockComponent(SvgIconComponent),
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
