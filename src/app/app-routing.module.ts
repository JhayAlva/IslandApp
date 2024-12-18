import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Es-es',
    loadChildren:()=>import('./island/island.module').then(i=>i.IslandModule),
  },
  {
    path:'**',
    redirectTo:'Es-es'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
