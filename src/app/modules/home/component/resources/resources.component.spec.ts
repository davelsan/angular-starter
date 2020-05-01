import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent }                    from 'ng-mocks';

/* COMPONENT */
import { ResourcesComponent } from './resources.component';
import { SvgIconComponent }   from '@shared/component/svg-icon/svg-icon.component';


describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResourcesComponent,
        MockComponent(SvgIconComponent),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
