import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1-bindings',
  template: `
    <h3>{{title}}</h3>

    <button (click)="onPizzaClick()" class="pizza-btn">Pizza</button> 
    <button (click)="onBeerClick()">Beer</button> 
  `,
})
export class C1BindingsComponent {
  title = "Default value"

  onPizzaClick(){ this.title = "Pizza" }

  onBeerClick(){ this.title = "Beer" }
}
