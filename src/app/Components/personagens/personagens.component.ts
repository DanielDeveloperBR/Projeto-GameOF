import { Component } from '@angular/core';
import { SobreService } from 'src/app/Pages/sobre/sobre.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent {
  images: string[] = []; // Utilize um array para armazenar as imagens
  nomes: string[] = []; // Array para armazenar os nomes dos personagens
  titulos: string[] = []; // Array para armazenar os títulos dos personagens
  startId: number = 1; // ID inicial
  numberOfCharacters: number = 48; // Número de personagens a buscar

  constructor(private SobreServ: SobreService, private http: HttpClient) {}

  ngOnInit() {
    for (let i = this.startId; i < this.startId + this.numberOfCharacters; i++) {
      this.http.get<any>(`https://thronesapi.com/api/v2/Characters/${i}`).subscribe(data => {
        this.images.push(data.imageUrl); // Adicione a imagem ao array
        this.nomes.push(data.fullName); // Adicione o nome ao array
        this.titulos.push(data.title); // Adicione o título ao array
        console.log(data);
      });
    }
  }
}
