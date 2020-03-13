import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule }              from '@angular/router/testing';
import { Component }                        from '@angular/core';
import { ContentComponent }                 from './content.component';


describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent,
        MockSvgDefsComponent,
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

@Component({
  selector: 'app-toolbar',
})
class MockToolbarComponent { }

@Component({
  selector: 'svg-defs',
})
class MockSvgDefsComponent { }
