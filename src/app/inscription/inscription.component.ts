import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
user:Utilisateur;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=new Utilisateur();
  }
  save()
  {
    this.user.grade="admin";
    let us=Object.assign({},this.user);
    this.userService.create_NewUser(us);
    alert("ajouté!");


  }

}
