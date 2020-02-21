import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserModule,HttpClientModule, ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent,BodyComponent,FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
