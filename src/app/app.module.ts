import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//angular
import { FormsModule } from '@angular/forms';


//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
//pagination
import {NgxPaginationModule} from 'ngx-pagination';

//components
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LayoutComponent } from './layout/layout.component';
import { HeadComponent } from './layout/head/head.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { EquipeComponent } from './equipe/equipe.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentComponent } from './document/document.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    LayoutComponent,
    HeadComponent,
    SidebarComponent,
    FooterComponent,
    ProfileComponent,
    AccueilComponent,
    UtilisateursComponent,
    EquipeComponent,
    StatistiquesComponent,
    MessagesComponent,
    DocumentComponent,
    ReclamationComponent,
    InscriptionComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
