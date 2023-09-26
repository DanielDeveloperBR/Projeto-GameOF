import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './Pages/sobre/sobre.component';
import { PaginaInicialComponent } from './Components/pagina-inicial/pagina-inicial.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { PersonagensComponent } from './Components/personagens/personagens.component';

const routes: Routes = [
  {path: "", component: PaginaInicialComponent},
  {path: "sobre", component: SobreComponent},
  {path: "contatos", component: ContatosComponent},
  {path: "personagens", component: PersonagensComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }