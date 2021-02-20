import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-profil',
  templateUrl: './create-profil.component.html',
  styleUrls: ['./create-profil.component.css']
})
export class CreateProfilComponent implements OnInit {

  constructor(private apiService:ApiService,private formBuilder:FormBuilder,private router:Router) { }

  addProfilForm: FormGroup;

  ngOnInit() {
    this.addProfilForm = this.formBuilder.group({
      id: [],
      nom_profil: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.addProfilForm.value);
    this.apiService.createData(this.addProfilForm.value,"/profil")
      .subscribe( data => {
        this.router.navigate(['profil']);
      });
  }

}
