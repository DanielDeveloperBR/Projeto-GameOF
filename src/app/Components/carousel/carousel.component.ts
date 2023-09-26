import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgIf, NgbAlert],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {
  images: string[] = []; // Utilize um array para armazenar as imagens
  startId: number = 1; // ID inicial
  numberOfCharacters: number = 20; // Número de personagens a buscar

  constructor(private http: HttpClient) {}

  ngOnInit() {
    for (let i = this.startId; i < this.startId + this.numberOfCharacters; i++) {
      this.http.get<any>(`https://thronesapi.com/api/v2/Characters/${i}`).subscribe(data => {
        this.images.push(data.imageUrl); // Adicione a imagem ao array
        console.log(data);
      });
    }
  }
  
}