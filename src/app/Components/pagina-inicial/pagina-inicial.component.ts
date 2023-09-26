import { Component } from '@angular/core';
import { NoticiasService } from 'src/app/Pages/homepage/noticias.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {
  // cards = [
  //   {
  //     t: "Testando Entrada de informação no Angular",
  //     i: "https://img.freepik.com/fotos-gratis/uma-imagem-de-um-planeta-com-um-buraco-negro-no-centro-e-um-buraco-negro-no-centro_1340-23795.jpg",
  //     c: "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
  //   },
  //   {
  //     t: "Testando Entrada de informação no Angular",
  //     i: "https://img.freepik.com/fotos-gratis/uma-imagem-de-um-planeta-com-um-buraco-negro-no-centro-e-um-buraco-negro-no-centro_1340-23795.jpg",
  //     c: "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
  //   },
  //   {
  //     t: "Testando Entrada de informação no Angular",
  //     i: "https://img.freepik.com/fotos-gratis/uma-imagem-de-um-planeta-com-um-buraco-negro-no-centro-e-um-buraco-negro-no-centro_1340-23795.jpg",
  //     c: "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
  //   }
  // ]
  // titulos: String[] = [
  //   "teste1",
  //   "teste2",
  //   "teste3",
  //   "teste4",
  //   "teste5"
  // ]
  // cards =[
  //   {texto: "testando 1", url: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_640.jpg"},
  //   {texto: "testando 2", url: "https://media.istockphoto.com/id/163011987/pt/foto/pilha-de-pacotes-de-d%C3%B3lares-americanos.webp?b=1&s=612x612&w=0&k=20&c=m-qZ3GUf_THgHzGsSlTWsRWOWwbi2E8Yrt0FlTf57QA="},
  //   {texto: "testando 3", url: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_640.jpg"},
  //   {texto: "testando 4", url: "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_640.jpg"}
  // ]

//   public Noticia: any = [];
//   constructor(private NotServ: NoticiasService) { }
//   ngOnInit(): void {
//     this.NotServ.getNoticia().subscribe(
//       data => {
//         this.Noticia = data.articles;
//         console.log(data.articles)
//       }
//     )
//   }
}