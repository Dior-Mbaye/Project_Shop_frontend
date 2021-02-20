import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {Router} from "@angular/router";

class Profil {
  id: number
  nom_profil: string
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  //Variable de type tableau
  profils: Profil[]

  constructor(private apiService:ApiService, private router:Router
  ) { }

  ngOnInit(): void {
    this.getProfiles()
  }

  getProfiles(){
    this.apiService.getData("/profil").subscribe(
      (results)=>{
        this.profils = results
      },
      ()=>{
        console.log('Erreur')
      },
      ()=>{
        console.log("reussi")
      }
    )
  }

  deleteProfil(profil: Profil): void {
    this.apiService.deleteData(profil.id,"/profil/")
      .subscribe( data => {
        this.profils = this.profils.filter(p => p !== profil);
      })
  };

  editProfil(profil: Profil): void {
    window.localStorage.removeItem("editProfilId");
    window.localStorage.setItem("editProfilId", profil.id.toString());
    this.router.navigate(['edit-profil']);
  };

  addProfil(): void {
    this.router.navigate(['add-profil']);
  };


}
