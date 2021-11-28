import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { RightSectionComponent } from './components/right-section/right-section.component';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    RightSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
    // BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
