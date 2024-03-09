import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  //quand il y a pas de parametre
   { path: '',   redirectTo: 'produits', pathMatch: 'full' },
   //pour etre rediriger vers product au lieu du port par défaut
   {path: 'produits', component:ProduitsComponent},
   //route vers detail produit
   {path: 'detail-produit', component: DetailProduitComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
