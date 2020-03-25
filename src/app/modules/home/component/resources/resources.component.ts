import { Component, OnInit, HostBinding } from '@angular/core';

type AngularResource = {
  label: string;
  href: string;
  svg: string;
}

@Component({
  selector: 'home-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public resources: AngularResource[];

  constructor() { }

  ngOnInit(): void {

    this.resources = [
      {
        label: 'Learn Angular',
        href: 'https://angular.io/tutorial',
        svg: 'grad-hat',
      },
      {
        label: 'CLI Documentation',
        href: 'https://angular.io/cli',
        svg: 'code-block',
      },
      {
        label: 'Angular Blog',
        href: 'https://blog.angular.io/',
        svg: 'angular-blog',
      },
    ];
  }

}
