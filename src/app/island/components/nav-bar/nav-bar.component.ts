import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'island-nav-bar',
  standalone: false,

  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-home'
      },
      {
          label: 'Acerca de',
          icon: 'pi pi-star'
      },
      {
         label: 'Servicios',
         icon: 'pi pi-star'
      },
      {
        label:'Contacto',
        icon:'pi pi-star'
      }
   ]
  }
}
