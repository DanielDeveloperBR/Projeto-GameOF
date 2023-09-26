import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './Components/pagina-inicial/pagina-inicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { CarouselComponent } from './Components/carousel/carousel.component';
import { SobreComponent } from './Pages/sobre/sobre.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { CadastrarComponent } from './Components/cadastrar/cadastrar.component';
import { EmpresaComponent } from './Pages/empresa/empresa.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { PersonagensComponent } from './Components/personagens/personagens.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    SobreComponent,
    FooterComponent,
    CadastrarComponent,
    EmpresaComponent,
    LoginComponent,
    ContatosComponent,
    PersonagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NavbarComponent,
    CarouselComponent,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
