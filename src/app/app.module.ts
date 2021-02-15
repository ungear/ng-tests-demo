import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1BindingsComponent } from './c1-bindings/c1-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    C1BindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
