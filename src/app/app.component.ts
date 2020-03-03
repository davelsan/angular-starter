import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-tailwind-eslint';

  resources = [
    {
      title: 'Learn Angular',
      href: 'https://angular.io/tutorial',
      svg: 'grad-hat',
    },
    {
      title: 'CLI Documentation',
      href: 'https://angular.io/cli',
      svg: 'code-block',
    },
    {
      title: 'Angular Blog',
      href: 'https://blog.angular.io/',
      svg: 'angular-blog',
    },
  ];

  steps = [
    { title: 'New Component',        value: 'component'  },
    { title: 'Angular Material',     value: 'material'   },
    { title: 'Add PWA Support',      value: 'pwa'        },
    { title: 'Add Dependency',       value: 'dependency' },
    { title: 'Run & Watch Tests',    value: 'test'       },
    { title: 'Build for Production', value: 'build'      },
  ];

  switches = [
    { text: 'ng generate component xyz', value: 'component'   },
    { text: 'ng add @angular/material',  value: 'material'    },
    { text: 'ng add @angular/pwa',       value: 'pwa'         },
    { text: 'ng add _____',              value: 'dependency'  },
    { text: 'ng test',                   value: 'test'        },
    { text: 'ng build --prod',           value: 'build'       },
  ]

  circles = [
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
