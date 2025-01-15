import { Component } from '@angular/core';

@Component({
  selector: 'island-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  personas = [
    { label: '1 persona', value: 1 },
    { label: '2 personas', value: 2 },
    { label: '3 personas', value: 3 },
  ];
  selectedPersonas: number = 1;

  ubicaciones = [
    { label: 'Reykjavik', value: 1 },
    { label: 'Akureyri', value: 2 },
    { label: 'Selfoss', value: 3 },
    { label: 'Keflavik', value: 4 },
  ];
  selectedUbicacion: number = 1;




}
