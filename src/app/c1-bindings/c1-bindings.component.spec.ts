import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C1BindingsComponent } from './c1-bindings.component';

describe('C1BindingsComponent', () => {
  let component: C1BindingsComponent;
  let fixture: ComponentFixture<C1BindingsComponent>;
  let titleElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1BindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1BindingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title by default', () => {
    fixture.detectChanges();    // to initialize bindings, call ngOnInit, etc.
    const componentRoot: HTMLElement = fixture.nativeElement;
    const titleElement = componentRoot.querySelector("h3");
    expect(titleElement.innerText).toBe("Default value");
  });

  it('should display correct title after click on a button', () => {
    fixture.detectChanges();   
    const titleElement = fixture.nativeElement.querySelector("h3");
    const pizzaBtn: HTMLElement = fixture.nativeElement.querySelector(".pizza-btn");

    pizzaBtn.click();         // trigger the click event
    fixture.detectChanges();  // make Angukar launch change detection routine
    expect(titleElement.innerText).toBe("Pizza");
  });
});
