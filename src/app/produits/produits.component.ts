import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  tabProducts=[
    {
      id:1,
      title:'Ordinateur',
      image:'https://img.freepik.com/photos-gratuite/equilibrage-ordinateur-portable-fond-violet_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.822484715.1690572046&semt=sph',
      description:'lorem ipsum dolor sit amet, consectetur adipiscing',
    
      
    },
    {
      id:2,
      title:'Téléphone',
      description:'lorem ipsum dolor sit amet, consectetur adipiscing',
      image:'https://img.freepik.com/photos-gratuite/composition-bobines-creatives_23-2149711507.jpg?size=626&ext=jpg&ga=GA1.1.822484715.1690572046&semt=sph',
      
    },
    {
      id:3,
      title:'Tablette',
      description:'lorem ipsum dolor sit amet, consectetur adipiscing',
      image:'https://img.freepik.com/photos-gratuite/ecran-tablette-numerique-smart-tech_53876-96808.jpg?size=626&ext=jpg&ga=GA1.1.822484715.1690572046&semt=sph',
      
    },
  ]
  isVraie=false;
  // constructor(private localStorage: LocalStorage) {
    constructor(private router: Router) {}
    ngOnInit(): void {
      // Le code d'initialisation du composant va ici
      if(!localStorage.getItem('produits')){
        localStorage.setItem('produits',JSON.stringify(this.tabProducts))
      }
    }
   

  redirigerVersAutrePage() {
    this.router.navigate(['/detail-produit']); 
    // le chemin de la page que vous souhaitez atteindre
  }
  //ajouter recemment
  // getProductById(id: number) {
  //   return this.tabProducts.find(produit => produit.id === id);
  // }
  // showProductDetails(produitId: number) {
  //    Utilisez Angular Router pour naviguer vers la page de détail du produit
  // }
 


}
