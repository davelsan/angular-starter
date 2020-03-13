import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent implements OnInit {

  @Input() name: string;
  @Input() svgClass: string;
  @Input() width: string;
  @Input() height: string;

  get absUrl() : string {
    return window.location.href;
  }

  constructor() { }

  ngOnInit(): void { }

}
