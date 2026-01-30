import { Component,signal } from '@angular/core';
import { Header } from '../header/header';
import { Produit } from '../../models/produit.model';
import { Shop } from '../../services/shop';
import { inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  imports: [RouterLink,RouterModule, Header],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css',
})
export class Acceuil {

  protected shop = inject(Shop);

  protected produits = this.shop['produits'];


  

  protected ajouterAuPanier(produit: Produit) {
    // Logique pour ajouter le produit au panier
    console.log(`Produit ${produit.nom} ajouté au panier`);
  }

  protected ajouterAuxFavoris(produit: Produit) {
    // Logique pour ajouter le produit aux favoris
    console.log(`Produit ${produit.nom} ajouté aux favoris`);
  }
}