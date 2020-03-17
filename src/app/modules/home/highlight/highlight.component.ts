import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {

  public title: string;

  constructor () { }

  ngOnInit(): void {

    this.title = 'angular-tailwind-eslint';

  }

}
