import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { PassComponent } from './pass/pass.component';


@NgModule({
  declarations: [
    AppComponent,
    PassComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
