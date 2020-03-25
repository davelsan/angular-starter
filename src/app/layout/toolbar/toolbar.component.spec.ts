import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { MockSvgIconComponent} from '@core/mock/svg-icon.mock';
import { ToolbarComponent }    from './toolbar.component';


describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        MockSvgIconComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(1).toEqual(1);
    expect(component).toBeTruthy();
  });
});
