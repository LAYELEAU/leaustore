import { Routes } from '@angular/router';
import { DetailProduit } from './components/detail-produit/detail-produit';
import { Acceuil } from './components/acceuil/acceuil';
import { Categories } from './components/categories/categories';

export const routes: Routes = [
     
    {
        path: '',
        redirectTo: '/acceuil',
        pathMatch: 'full'
    },
    {
        path: 'acceuil',
        component: Acceuil
    },
    {
        path: 'detail-produit/:id',
        component: DetailProduit
    },
    {
        path: 'categorie/:nom',
        component: Categories
    }
];