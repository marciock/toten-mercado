import { Component, OnInit,Input } from '@angular/core';


import {ServiceKey} from '../service-key';

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit {
  
  @Input() label: string='';
  cpf:string='';
  constructor(private serviceKey:ServiceKey) {

   }

  ngOnInit(): void {
    
    this.serviceKey.emitKey.subscribe(
      (key:string)=>{
        switch (key) {
          case 'cancel':
            this.cpf='';
            
            break;
          case 'backspace':
            this.cpf=this.cpf.slice(0,-1);
            
            break;
        
          default:
            this.cpf +=key;
            break;
        }
          
        
       
        console.log(this.cpf);

      }
    )
  }
  
}
