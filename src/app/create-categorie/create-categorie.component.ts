import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Profil} from "../models/profil.model";

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {

  constructor(private apiService:ApiService,private formBuilder:FormBuilder,private router:Router) { }

  addCategorieForm: FormGroup;
  profils:Profil[]

  ngOnInit() {
    this.addCategorieForm = this.formBuilder.group({
      id: [],
      nom_cat: ['', Validators.required],
      id_profil: ['', Validators.required]
    });
    this.getProfiles()
  }

  getProfiles(){
    this.apiService.getData("/profil").subscribe(
      (results)=>{
        this.profils = results
        console.log(this.profils)
      },
      ()=>{
        console.log('Erreur')
      },
      ()=>{
        console.log("reussi")
      }
    )
  }

  onSubmit() {
    console.log(this.addCategorieForm.value);
    this.apiService.createData(this.addCategorieForm.value,"/categorie")
      .subscribe( data => {
        this.router.navigate(['categorie']);
      });
  }


}
