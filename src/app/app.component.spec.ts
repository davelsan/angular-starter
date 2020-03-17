import { async, ComponentFixture, TestBed } from '@angular/core/testing';

/* MODULES */
import { RouterTestingModule } from '@angular/router/testing';

/* COMPONENT */
import { AppComponent }        from './app.component';


describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
