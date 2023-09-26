import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  private check: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  get checado(): boolean {
    return this.check;
  }

  set checado(value: boolean) {
    this.check = value;
  }

  cadastrarUsuario(nome: string, login: string, senha: string, repetirSenha: string, email: string, cpf: string, cep: string, cidade: string,  bairro: string, rua: string, event: Event) {
    event.preventDefault()

    if (nome === "" || login === "" || senha === "" || repetirSenha === "" || email === "" || cpf === "" || cep === "" || cidade === "" || bairro === "" || rua === "") {
      alert("logado")
    } else if (senha !== repetirSenha) {
      alert("Senhas diferentes")
      return
    }else if(!this.check){
      alert("Precisa confirmar os termos")
      return
    } else {
      this.http.post<any>(`http://localhost:3000/usuario`, { nome: nome, senha: senha, login: login, email: email, cpf: cpf, cep: cep, cidade: cidade, bairro: bairro, rua: rua }, { responseType: 'json' }).subscribe(data => {
        console.log(data)
        this.router.navigate(['/logar']);
        alert("Foi")
      })
    }
  }
}
