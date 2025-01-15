import { Component, OnInit } from '@angular/core';
import { IslandService } from '../../services/island.service';

@Component({
  selector: 'island-carrousel-fotos',
  standalone: false,

  templateUrl: './carrousel-fotos.component.html',
  styleUrl: './carrousel-fotos.component.css'
})
export class CarrouselFotosComponent implements OnInit {

  images:any[]=[];

  responsiveOptions: any[] = [
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
];

  constructor(private islandSvc:IslandService){}

  ngOnInit() {
    this.getFotos();
  }

  getFotos(){
    this.islandSvc.getImages().subscribe(data=>{
      this.images = data.images;
      console.log('imagenes',this.images);
    })
  }

}
