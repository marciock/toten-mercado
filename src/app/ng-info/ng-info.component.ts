import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-info',
  templateUrl: './ng-info.component.html',
  styleUrls: ['./ng-info.component.css']
})
export class NgInfoComponent implements OnInit {
message:any='Digite o número de seu CPF no teclado ao lado.Se não quer registrar o CPF toque em Cancelar. Para seguir toque em Confirmar';
  constructor() { }

  ngOnInit(): void {
    
  }

}
