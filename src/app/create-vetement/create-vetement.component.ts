import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Profil} from "../models/profil.model";
import {Vetement} from "../models/vetement";
import {Categorie} from "../models/categorie.model";

@Component({
  selector: 'app-create-vetement',
  templateUrl: './create-vetement.component.html',
  styleUrls: ['./create-vetement.component.css']
})
export class CreateVetementComponent implements OnInit {

  constructor(private apiService:ApiService,private formBuilder:FormBuilder,private router:Router) { }

  addVetementForm: FormGroup;
  categories:Categorie[]

  ngOnInit() {
    this.addVetementForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      nbre: ['', Validators.required],
      id_cat: ['', Validators.required],
    });
    this.getCategories()
  }

  getCategories(){
    this.apiService.getData("/categorie").subscribe(
      (results)=>{
        this.categories = results
        console.log(this.categories)
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
    console.log(this.addVetementForm.value);
    this.apiService.createData(this.addVetementForm.value,"/vetement")
      .subscribe( data => {
        this.router.navigate(['vetement']);
      });
  }
}
