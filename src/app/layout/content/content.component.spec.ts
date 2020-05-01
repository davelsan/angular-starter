import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent }                    from 'ng-mocks';

/* MODULES */
import { RouterTestingModule } from '@angular/router/testing';

/* COMPONENT */
import { ContentComponent } from './content.component';
import { FooterComponent }  from '../footer/footer.component';
import { SvgIconComponent } from '@shared/component/svg-icon/svg-icon.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';



describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
        MockComponent(FooterComponent),
        MockComponent(SvgIconComponent),
        MockComponent(ToolbarComponent),
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
