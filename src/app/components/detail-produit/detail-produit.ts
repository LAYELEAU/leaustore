import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Produit } from '../../models/produit.model';
import { Shop } from '../../services/shop';

@Component({
  selector: 'app-detail-produit',
  standalone: true, 
  imports: [RouterLink, RouterModule],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css',
})
export class DetailProduit implements OnInit {
  // 1. Injecter les outils nécessaires
  private route = inject(ActivatedRoute); // Pour lire l'ID dans l'URL
  protected shop = inject(Shop);          // Ton service de données

  // 2. Initialiser le signal à null (le loader s'affichera tant qu'il est null)
  protected produit = signal<Produit | null>(null);

  ngOnInit() {
    // 3. Récupérer l'ID de l'URL au chargement du composant
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      const idNumerique = Number(idParam);
      
      // 4. Chercher le produit correspondant dans ton service
      // On utilise .find() sur la liste des produits
      const produitTrouve = this.shop.produits().find(p => p.id === idNumerique);

      if (produitTrouve) {
        // 5. On met à jour le signal -> le HTML va s'actualiser automatiquement !
        this.produit.set(produitTrouve);
      } else {
        console.error("Produit non trouvé en base pour l'ID :", idNumerique);
      }
    }
  }

  protected ajouterAuPanier() {
    const p = this.produit();
    if (p) {
      console.log(`Ajout de ${p.nom} au panier`);
      // Appel de ton service : this.shop.addToCart(p);
    }
  }

  protected produitsSimilaires()
  {
    const p = this.produit();
    if (p) {
      return this.shop.produits().filter(prod => prod.categorie === p.categorie && prod.id !== p.id);
    }
    return [];
  }
}