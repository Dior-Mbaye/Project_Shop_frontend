import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {Router} from "@angular/router";


class Vetement {
  id: number
  title: string
  description: string
  price: number
  color: string
  nbre: number
  id_cat:number
}

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {

  vetements: Vetement[]

  constructor(private apiService:ApiService, private router:Router
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.apiService.getData("/vetement").subscribe(
      (results)=>{
        this.vetements = results
      },
      ()=>{
        console.log('Erreur')
      },
      ()=>{
        console.log("reussi")
      }
    )
  }

  deleteVetement(vetement: Vetement): void {
    this.apiService.deleteData(vetement.id,"/vetement/")
      .subscribe( data => {
        this.vetements = this.vetements.filter(v => v !== vetement);
      })
  };

  editVetement(vetement: Vetement): void {
    window.localStorage.removeItem("editVetementId");
    window.localStorage.setItem("editVetementId", vetement.id.toString());
    this.router.navigate(['edit-vetement']);
  };

  addVetement(): void {
    this.router.navigate(['add-vetement']);
  };
}
