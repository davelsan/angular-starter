import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icon'
})
export class MockSvgIconComponent {
  @Input() name: string;
}