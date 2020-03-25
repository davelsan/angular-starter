import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { StepsComponent } from './steps.component';

/* MOCKS */
import { MockSvgIconComponent } from '@core/mock/svg-icon.mock';


describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StepsComponent,
        MockSvgIconComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
