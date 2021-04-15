import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
@Input() menu=[
  {
  title:'Informação da Nota Fiscal',
  icon:'fa fa-address-card fa-xs',
  status:'btn-primary'
},
{
  title:'Seleção de Produtos Para Compra',
  icon:'fa fa-barcode fa-xs',
  status:'btn-secondary'
},
{
  title:'Finalizar Compra e Pagamento',
  icon:'fa fa-cart-arrow-down fa-xs',
  status:'btn-secondary'
}
];


  constructor() { }

  ngOnInit(): void {
  }

}
