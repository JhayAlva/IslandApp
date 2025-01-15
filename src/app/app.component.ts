import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'island-guia-app';

  constructor(private primeng: PrimeNG){
    this.primeng.theme.set({
      preset: Aura,
          options: {
              cssLayer: {
                  name: 'primeng',
                  order: 'tailwind-base, primeng, tailwind-utilities'
              }
          }
      })
  }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

}
