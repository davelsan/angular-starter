import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent }                    from 'ng-mocks';

/* COMPONENTS */
import { HomeComponent }      from './home.component';
import { HighlightComponent } from './component/highlight/highlight.component';
import { LinksComponent }     from './component/links/links.component';
import { ResourcesComponent } from './component/resources/resources.component';
import { StepsComponent }     from './component/steps/steps.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockComponent(HighlightComponent),
        MockComponent(LinksComponent),
        MockComponent(ResourcesComponent),
        MockComponent(StepsComponent),
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
