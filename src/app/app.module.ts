import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AdminModuleModule } from './admin-module/admin-module.module';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeComponent } from './admin-module/home/home.component';
import { TopicsComponent } from './admin-module/topics/topics.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';
import { UsermoduleComponent } from './usermodule/usermodule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopicsComponent,
    TodoComponent,
    UserComponent,
    UsermoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModuleModule,
    MatDatepickerModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
