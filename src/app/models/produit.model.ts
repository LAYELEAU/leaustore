// On définit les catégories possibles à part pour plus de clarté
export type CategorieProduit = 'portable' | 'ecouteur' | 'ordinateur' | 'tablette';

export interface Produit {
    id: number;           // Obligatoire pour identifier le produit dans le panier
    nom: string;          // Obligatoire pour l'affichage
    description: string;
    prix: number;
    prixOriginal: number;  // Pour afficher le prix original si en promo
    promo: number;     // Pour afficher le prix promo si en promo
    image: string;
    stock: number;        // J'ai remplacé 'quantity' par 'stock' (plus clair pour la boutique)
    categorie: CategorieProduit;
    enPromo?: boolean;    // Suggestion : pour afficher un badge "Soldes" comme dans ton design
    rating?: number; // 1-5
    reviews?: number;
    nouveau?: boolean;

}
