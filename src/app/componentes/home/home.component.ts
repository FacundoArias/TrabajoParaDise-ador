import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ancho:number=innerWidth;
  constructor() {
    addEventListener("resize",()=>{
      this.ancho=innerWidth;
    })

   }

  ngOnInit(): void {
  }
}