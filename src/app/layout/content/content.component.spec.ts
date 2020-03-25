import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* MODULES */
import { RouterTestingModule } from '@angular/router/testing';

/* COMPONENT */
import { ContentComponent } from './content.component';

/* MOCKS */
import { MockAppFooterComponent } from '@core/mock/app-footer.mock';
import { MockSvgDefsComponent }   from '@core/mock/svg-defs.mocks';
import { MockSvgIconComponent }   from '@core/mock/svg-icon.mock';
import { MockToolbarComponent }   from '@core/mock/app-toolbar.mock';


describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
        MockAppFooterComponent,
        MockSvgDefsComponent,
        MockSvgIconComponent,
        MockToolbarComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
