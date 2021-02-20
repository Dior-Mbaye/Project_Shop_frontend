import { Component, OnInit } from '@angular/core';
import {Profil} from "../models/profil.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  editProfilForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let profilId = window.localStorage.getItem("editProfilId");
    console.log(profilId);
    if(!profilId) {
      this.router.navigate(['profil']);
      return;
    }
    this.editProfilForm = this.formBuilder.group({
      id: [''],
      nom_profil: ['', Validators.required],
    });
    this.apiService.getDataById(+profilId,"/profil/")
      .subscribe( data => {
        this.editProfilForm.setValue(data);
      });
  }

  onSubmit() {
    console.log(this.editProfilForm.value)
    this.apiService.updateData(this.editProfilForm.value, this.editProfilForm.value.id,"/profil/")
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

  backToListProfil(){
    this.router.navigate(['profil'])
  }

}
