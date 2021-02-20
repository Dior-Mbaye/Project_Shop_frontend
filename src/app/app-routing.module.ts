import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from "./profil/profil.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {VetementComponent} from "./vetement/vetement.component";
import {CreateProfilComponent} from "./create-profil/create-profil.component";
import {EditProfilComponent} from "./edit-profil/edit-profil.component";
import {CreateCategorieComponent} from "./create-categorie/create-categorie.component";
import {EditCategorieComponent} from "./edit-categorie/edit-categorie.component";
import {CreateVetementComponent} from "./create-vetement/create-vetement.component";
import {EditVetementComponent} from "./edit-vetement/edit-vetement.component";

const routes: Routes = [
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'categorie',
    component: CategorieComponent,
  },
  {
    path: 'vetement',
    component: VetementComponent,
  },
  {
    path: 'add-profil',
    component: CreateProfilComponent,
  },
  {
    path: 'edit-profil',
    component: EditProfilComponent,
  },
  {
    path: 'add-categorie',
    component: CreateCategorieComponent,
  },
  {
    path: 'edit-categorie',
    component: EditCategorieComponent,
  },
  {
    path: 'add-vetement',
    component: CreateVetementComponent,
  },
  {
    path: 'edit-vetement',
    component: EditVetementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
