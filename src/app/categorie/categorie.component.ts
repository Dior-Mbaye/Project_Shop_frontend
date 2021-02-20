import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {Router} from "@angular/router";

class Categorie {
  id: number
  nom_cat: string
}

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[]

  constructor(private apiService:ApiService, private router:Router
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.apiService.getData("/categorie").subscribe(
      (results)=>{
        this.categories = results
      },
      ()=>{
        console.log('Erreur')
      },
      ()=>{
        console.log("reussi")
      }
    )
  }

  deleteCategorie(categorie: Categorie): void {
    this.apiService.deleteData(categorie.id,"/categorie/")
      .subscribe( data => {
        this.categories = this.categories.filter(c => c !== categorie);
      })
  };

  editCategorie(categorie: Categorie): void {
    window.localStorage.removeItem("editCategorieId");
    window.localStorage.setItem("editCategorieId", categorie.id.toString());
    this.router.navigate(['edit-categorie']);
  };

  addCategorie(): void {
    this.router.navigate(['add-categorie']);
  };
}
