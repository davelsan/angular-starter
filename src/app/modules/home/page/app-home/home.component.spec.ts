import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* COMPONENT */
import { HomeComponent } from './home.component';

/* MOCKS */
import { MockHomeHighlightComponent } from '@core/mock/home-highlight.mock';
import { MockHomeLinksComponent }     from '@core/mock/home-links.mock';
import { MockHomeResourcesComponent } from '@core/mock/home-resources.mock';
import { MockHomeStepsComponent }     from '@core/mock/home-steps.mock';


describe('HomeComponent', () => {
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
