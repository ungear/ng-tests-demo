import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1BindingsComponent } from './c1-bindings/c1-bindings.component';
import { C2AsyncServiceComponent } from './c2-async-service/c2-async-service.component';

@NgModule({
  declarations: [
    AppComponent,
    C1BindingsComponent,
    C2AsyncServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
