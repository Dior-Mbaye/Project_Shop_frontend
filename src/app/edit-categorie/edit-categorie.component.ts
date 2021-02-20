import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  editCategorieForm: FormGroup;
  profils : any[]

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getProfiles();
    let categorieId = window.localStorage.getItem("editCategorieId");
    console.log(categorieId);
    if(!categorieId) {
      this.router.navigate(['categorie']);
      return;
    }
    this.editCategorieForm = this.formBuilder.group({
      id: [''],
      nom_cat: ['', Validators.required],
      id_profil: ['', Validators.required],
    });
    this.apiService.getDataById(+categorieId,"/categorie/")
      .subscribe( data => {
        this.editCategorieForm.setValue(data);
      });
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
    console.log(this.editCategorieForm.value)
    this.apiService.updateData(this.editCategorieForm.value, this.editCategorieForm.value.id,"/categorie/")
      .pipe(first())
      .subscribe(
        data => {
        },
        error => {
          alert(error);
        },
        () => {
          alert("Modification reussi")
        });
  }

  backToListCategorie(){
    this.router.navigate(['categorie'])
  }

}
