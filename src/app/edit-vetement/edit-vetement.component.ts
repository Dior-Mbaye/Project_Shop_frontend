import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-vetement',
  templateUrl: './edit-vetement.component.html',
  styleUrls: ['./edit-vetement.component.css']
})
export class EditVetementComponent implements OnInit {

  editVetementForm: FormGroup;
  categories : any[]

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getCategories();
    let vetementId = window.localStorage.getItem("editVetementId");
    if(!vetementId) {
      this.router.navigate(['vetement']);
      return;
    }
    this.editVetementForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      nbre: ['', Validators.required],
      id_cat: ['', Validators.required],
    });
    this.apiService.getDataById(+vetementId,"/vetement/")
      .subscribe( data => {
        this.editVetementForm.setValue(data);
      });
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
    console.log(this.editVetementForm.value)
    this.apiService.updateData(this.editVetementForm.value, this.editVetementForm.value.id,"/vetement/")
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

  backToListVetement(){
    this.router.navigate(['vetement'])
  }

}
