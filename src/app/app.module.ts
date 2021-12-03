import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { RightSectionComponent } from './components/right-section/right-section.component';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BlogsService } from './services/blogs.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

// import {  } from '@angular/fire';
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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxShimmerLoadingModule
  ],
  providers: [
    BlogsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
