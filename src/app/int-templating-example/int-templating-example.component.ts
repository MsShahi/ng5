import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-int-templating-example',
  template: `<div>Inline HTML & CSS
  <p>This is my inline HTML & CSS!</p></div>`,
  styles: [`
  p {color: grey;}
  div { margin:10px;color: maroon;border: 1px solid gray;padding:25px;width:200px;font-weight: bold;}
  `]
})
export class IntTemplatingExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
