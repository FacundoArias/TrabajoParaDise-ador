import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() {
    addEventListener("resize",()=>{
      let nav=document.querySelector(".ul__nav");
    if(innerWidth>769){
      if(nav.classList.contains("mostrar-ocultar-barra")){
        nav.classList.remove("mostrar-ocultar-barra");
      }
    }
    if(innerWidth<769){
        nav.classList.add("mostrar-ocultar-barra");
    }
   })
  }
  ngOnInit(): void {
  }
  mostrarNav(navside,icon){
    navside.classList.toggle('mostrar-ocultar-barra');
    if(navside.classList.contains('mostrar-ocultar-barra')){
      icon.classList.remove("rotar-flecha");
      icon.classList.add("fijar-flecha");
    }
    else{
      icon.classList.remove("fijar-flecha");
      icon.classList.add("rotar-flecha");
    }
}

}
