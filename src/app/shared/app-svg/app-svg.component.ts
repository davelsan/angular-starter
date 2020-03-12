import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './app-svg.component.html',
  styleUrls: ['./app-svg.component.css']
})
export class AppSvgComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void { }

}
