import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { RegistrationComponent } from './registration/registration.component';
// import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  { path:'chat', component:ChatbotComponent },
  // { path:'chatbox', component:ChatboxComponent},
  { path:'reg', component:RegistrationComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
