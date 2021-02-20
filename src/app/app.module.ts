import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { CategorieComponent } from './categorie/categorie.component';
import { VetementComponent } from './vetement/vetement.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateProfilComponent } from './create-profil/create-profil.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { CreateVetementComponent } from './create-vetement/create-vetement.component';
import { EditVetementComponent } from './edit-vetement/edit-vetement.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    CategorieComponent,
    VetementComponent,
    CreateProfilComponent,
    EditProfilComponent,
    CreateCategorieComponent,
    EditCategorieComponent,
    CreateVetementComponent,
    EditVetementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Important d'importer le module pour les requéte HTTP
    FormsModule,//Importer les form
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
