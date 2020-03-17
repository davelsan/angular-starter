import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { FooterComponent } from './footer.component';

/* MOCKS */
import { MockSvgIconComponent } from '@core/mocks/svg-icon.mock';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        MockSvgIconComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
