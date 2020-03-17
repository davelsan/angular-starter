import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponent }       from './links.component';
import { MockSvgIconComponent } from '@core/mocks/svg-icon.mock';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinksComponent,
        MockSvgIconComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
