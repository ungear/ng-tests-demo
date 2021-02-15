import { Component, OnInit } from '@angular/core';
import { PizzaService } from "../services/pizza.service";

@Component({
  selector: 'app-c2-async-service',
  template: `
    <h3>{{title}}</h3>

    <button (click)="onPizzaClick()" class="pizza-btn">Get Pizza</button> 
  `,
})
export class C2AsyncServiceComponent {
  title = "Default value";

  constructor(private pizzaService: PizzaService) {}

  onPizzaClick(){
    this.pizzaService.getPizza().subscribe(x => this.title = x);
  }
}
