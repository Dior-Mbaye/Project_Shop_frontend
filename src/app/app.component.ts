import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-front';

  constructor(private router:Router) {
  }

  goToProfil(){
    this.router.navigate(['profil'])
  }

  goToCategorie(){
    this.router.navigate(['categorie'])
  }

  goToVetement(){
    this.router.navigate(['vetement'])
  }
}
