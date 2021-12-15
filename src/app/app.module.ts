import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HttpClientModule } from "@angular/common/http";
import { ChatboxComponent } from './chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ChatbotComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
