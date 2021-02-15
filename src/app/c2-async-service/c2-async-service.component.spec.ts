import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PizzaService } from '../services/pizza.service';

import { C2AsyncServiceComponent } from './c2-async-service.component';

describe('C2AsyncServiceComponent', () => {
  let component: C2AsyncServiceComponent;
  let fixture: ComponentFixture<C2AsyncServiceComponent>;
  let pizzaService;

  beforeEach(async () => {
    pizzaService = jasmine.createSpyObj("PizzaService", ["getPizza"]);
    pizzaService.getPizza.and.returnValue(of("mock pizza").pipe(delay(100)))

    await TestBed.configureTestingModule({
      declarations: [ C2AsyncServiceComponent ],
      providers: [
        { provide: PizzaService, useValue: pizzaService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2AsyncServiceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title after click on a button (fakeAsync/tick)', fakeAsync(() => {
    fixture.detectChanges();   
    const titleElement = fixture.nativeElement.querySelector("h3");
    const pizzaBtn: HTMLElement = fixture.nativeElement.querySelector(".pizza-btn");

    pizzaBtn.click();         

    tick(200);

    fixture.detectChanges();  // make Angular launch change detection routine
    expect(titleElement.innerText).toBe("mock pizza")
  }));

  it('should display correct title after click on a button (waitForAsync/fixture.whenStable)',  waitForAsync(() => {
    fixture.detectChanges();   
    const titleElement = fixture.nativeElement.querySelector("h3");
    const pizzaBtn: HTMLElement = fixture.nativeElement.querySelector(".pizza-btn");

    pizzaBtn.click();         
    fixture.whenStable().then(() => {
      fixture.detectChanges();  // make Angular launch change detection routine
      expect(titleElement.innerText).toBe("mock pizza")
    })
  }));
});
