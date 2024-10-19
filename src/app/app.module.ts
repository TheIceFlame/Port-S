import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {NgxTranslateModule} from "./translate/translate.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxSpinnerModule} from "ngx-spinner";
import { IntershipComponent } from './intership/intership.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    IntershipComponent
  ],
  imports: [
    BrowserModule,
    NgxTranslateModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({type: 'ball-spin'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
