import { Component, OnInit } from '@angular/core';


type AngularStep = {
  label: string;
  value: string;
}

type TerminalSwitch = {
  text: string;
  value: string;
}

@Component({
  selector: 'home-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  public steps: AngularStep[];
  public switches: TerminalSwitch[];

  constructor() { }

  ngOnInit(): void {

    this.steps = [
      { label: 'New Component',        value: 'component'  },
      { label: 'Angular Material',     value: 'material'   },
      { label: 'Add PWA Support',      value: 'pwa'        },
      { label: 'Add Dependency',       value: 'dependency' },
      { label: 'Run & Watch Tests',    value: 'test'       },
      { label: 'Build for Production', value: 'build'      },
    ];

    this.switches = [
      { text: 'ng generate component xyz', value: 'component'   },
      { text: 'ng add @angular/material',  value: 'material'    },
      { text: 'ng add @angular/pwa',       value: 'pwa'         },
      { text: 'ng add _____',              value: 'dependency'  },
      { text: 'ng test',                   value: 'test'        },
      { text: 'ng build --prod',           value: 'build'       },
    ];

  }

}
