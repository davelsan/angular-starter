import { Component, OnInit } from '@angular/core';


type ToolLink = {
  title: string;
  href: string;
  svg: string;
}

@Component({
  selector: 'home-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  public tools: ToolLink[];

  constructor() { }

  ngOnInit(): void {

    this.tools = [
      {
        title: 'Animations',
        href: 'https://angular.io/guide/animations',
        svg: 'ng-animations'
      },
      {
        title: 'CLI',
        href: 'https://cli.angular.io/',
        svg: 'ng-cli'
      },
      {
        title: 'Augury',
        href: 'https://augury.rangle.io/',
        svg: 'ng-augury'
      },
      {
        title: 'Protractor',
        href: 'https://www.protractortest.org/',
        svg: 'ng-protractor'
      },
      {
        title: 'Find a Local Meetup',
        href: 'https://www.meetup.com/find/?keywords=angular',
        svg: 'meetup-logo'
      },
      {
        title: 'Join the Conversation on Gitter',
        href: 'https://gitter.im/angular/angular',
        svg: 'ng-gitter'
      },
    ];
  }

}
