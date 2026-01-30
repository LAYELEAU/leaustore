import { Injectable, signal } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root',
})
export class Shop {

  public produits = signal<Produit[]>([
    {
      id: 1,
      nom: 'Ordinateur Portable',
      description: 'Un ordinateur portable puissant pour le travail et le divertissement.',
      prix: 999.99,
      prixOriginal: 1299.99,
      promo: 999.99,
      image: 'assets/images/ordinateur.jpeg',
      stock: 10,
      categorie: 'ordinateur',
      nouveau: true,
      rating: 4.5,
      reviews: 120,


    },
    {
      id: 2,
      nom: 'Casque Audio',
      description: 'Un casque audio de haute qualité pour une expérience sonore immersive.',
      prix: 199.99,
      prixOriginal: 249.99,
      promo: 50,
      stock: 25,
      categorie: 'ecouteur',
      image: 'assets/images/ecouteur.jpeg',
      nouveau: false,
      rating: 4.2,
      reviews: 85,

    },
    {
      id: 3,
      nom: 'Portable',
      description: 'Un portable performant pour le travail et le divertissement.',
      prix: 299.99,
      prixOriginal: 399.99,
      promo: 100,
      stock: 15,
      categorie: 'ordinateur',
      image: 'assets/images/portable.jpeg',
      nouveau: true,
      rating: 4.7,
      reviews: 200,
    },

    {
      id: 4,
      nom: 'Tablette',
      description: 'Une tablette performante pour le travail et le divertissement.',
      prix: 399.99,
      prixOriginal: 499.99,
      promo: 100,
      stock: 20,
      categorie: 'tablette',
      image: 'assets/images/tablette.jpeg',
      nouveau: true,
      rating: 4.3,
      reviews: 95,
    }
  ]);

}