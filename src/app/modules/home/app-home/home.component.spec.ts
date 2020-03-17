import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { HomeComponent } from './home.component';

/* MOCKS */
import { MockHomeHighlightComponent } from '@core/mocks/home-highlight.mock';
import { MockHomeLinksComponent }     from '@core/mocks/home-links.mock';
import { MockHomeResourcesComponent } from '@core/mocks/home-resources.mock';
import { MockHomeStepsComponent }     from '@core/mocks/home-steps.mock';


describe('AppHomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockHomeHighlightComponent,
        MockHomeLinksComponent,
        MockHomeResourcesComponent,
        MockHomeStepsComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
