import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MostrarFuncionariosComponent } from './funcionarios/mostrar-funcionarios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { CrearPlanillaDeactivateGuard } from './guard/crear-planilla-deactivate.guard';
import { PaginadorService } from './servicios/paginador.service';
import { UserService } from './servicios/user.service';
import { AuthenticationService } from './servicios/authentication.service';
import { AlertService } from './servicios/alert.service';

import { SinEspacios } from './validaciones.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MostrarFuncionariosComponent,
    LoginComponent,
    RegisterComponent,
    SinEspacios
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" },CrearPlanillaDeactivateGuard,PaginadorService,UserService,AuthenticationService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
