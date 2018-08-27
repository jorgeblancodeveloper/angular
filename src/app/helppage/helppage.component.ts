import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helppage',
  template: `
    <p>
      helppage works!
    </p>
    <a routerLink="/">Back to Home</a>
  `,
  styles: []
})
export class HelppageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
