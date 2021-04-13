import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-board',
  templateUrl: './key-board.component.html',
  styleUrls: ['./key-board.component.css']
})
export class KeyBoardComponent implements OnInit {

  keys:any=[
    {key:'7',value:7},
    {key:'8',value:8},
    {key:'9',value:9},
    {key:'4',value:4},
    {key:'5',value:5},
    {key:'6',value:6},
    {key:'1',value:1},
    {key:'2',value:2},
    {key:'3',value:3},
    {key:'0',value:0}  
    
    
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
