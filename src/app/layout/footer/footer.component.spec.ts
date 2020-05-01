import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent }                    from 'ng-mocks';

/* COMPONENT */
import { FooterComponent }  from './footer.component';
import { SvgIconComponent } from '@shared/component/svg-icon/svg-icon.component';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        MockComponent(SvgIconComponent),
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
