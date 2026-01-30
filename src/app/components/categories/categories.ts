import { Component,signal,computed } from '@angular/core';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Shop } from '../../services/shop';

@Component({
  selector: 'app-categories',
  imports: [RouterLink,RouterModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  private route = inject(ActivatedRoute);
  private shop = inject(Shop);

 

  // Le nom de la catégorie actuelle (ex: 'Informatique')
  protected nomCategorie = signal<string>('');

  // Liste filtrée automatiquement dès que le nom de la catégorie change
   protected produitsFiltres = computed(() => {
  return this.shop.produits().filter(p => 
    p.categorie.toLowerCase() === this.nomCategorie().toLowerCase()
  );
});

  ngOnInit() {
    // On écoute les changements de l'URL (si l'utilisateur passe de 'RSE' à 'Qualité')
    this.route.params.subscribe(params => {
      this.nomCategorie.set(params['nom']);
    });
  }

  

}
