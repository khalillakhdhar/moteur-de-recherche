import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { EquipeComponent } from './equipe/equipe.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentComponent } from './document/document.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:"",component: ConnexionComponent},
  {path:"inscription",component: InscriptionComponent},
  {path:"home",component:LayoutComponent,
children:
[
  {path:'profile',component:ProfileComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'utilisateurs',component:UtilisateursComponent},
  {path:'equipe',component:EquipeComponent},
  {path:'stats',component:StatistiquesComponent},
  {path:'messages',component:MessagesComponent},
  {path:'document',component:DocumentComponent},
  {path:'reclamation',component:ReclamationComponent},

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
