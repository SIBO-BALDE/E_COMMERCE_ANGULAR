import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitsComponent } from '../produits/produits.component';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  // constructor(private route: ActivatedRoute, private produits: ProduitsComponent) {
  //   const produitId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.produits = this.produits.getProductById(produitId);
  // }
  

}
