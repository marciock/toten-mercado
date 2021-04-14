import {Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class ServiceKey{

    //private key:any;
    emitKey=new EventEmitter<string>();
    constructor(){
        
    }
    getModel(key:any){

        //this.key=key;

        this.emitKey.emit(key);
       


    }
    
    

}