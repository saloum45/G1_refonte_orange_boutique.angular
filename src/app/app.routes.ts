import { Routes } from '@angular/router';
import { AccueilComponent } from './utilisateurs/accueil/accueil.component';
import { AccueilUtilisateurComponent } from './utilisateurs/accueil-utilisateur/accueil-utilisateur.component';
import { BoutiqueComponent } from './utilisateurs/boutique/boutique.component';
import { PanierComponent } from './utilisateurs/panier/panier.component';
import { AssistanceComponent } from './utilisateurs/assistance/assistance.component';
import { OffreInternetComponent } from './utilisateurs/offre-internet/offre-internet.component';
import { OffreMobileComponent } from './utilisateurs/offre-mobile/offre-mobile.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'accueil',pathMatch:'full'
    },
    {
        path:'accueil',component:AccueilComponent
    },
    {
        path:'accueil-utilisateur',component:AccueilUtilisateurComponent
    },
    {
        path:'boutique',component:BoutiqueComponent
    },
    {
        path:'panier',component:PanierComponent
    },
    {
        path:'assistance',component:AssistanceComponent
    },
    {
        path:'internet',component:OffreInternetComponent
    },
    {
        path:'mobile',component:OffreMobileComponent
    },
    
    

];
