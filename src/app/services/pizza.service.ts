import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  getPizza() {
    return of("pizza").pipe(delay(1000))
  }
}
