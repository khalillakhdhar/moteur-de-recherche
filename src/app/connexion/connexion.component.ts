import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  b=false;
  user:Utilisateur;
  users:Utilisateur[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=new Utilisateur();
    this.read();
  }
read()
{
  this.userService.read_Users().subscribe(data => {

    this.users = data.map(e => {
      return {
       id: e.payload.doc.id,

       nom: e.payload.doc.data()["nom"],
       age: e.payload.doc.data()["age"],
       adresse: e.payload.doc.data()["adresse"],
       email: e.payload.doc.data()["email"],
       mdp: e.payload.doc.data()["mdp"],
       telephone: e.payload.doc.data()["telephone"],
       grade: e.payload.doc.data()["grade"],
       equipe: e.payload.doc.data()["equipe"],



      };
    });
    console.log(this.users);

  });



}
verif()
{
for (let u of this.users)
{
  if((u.email==this.user.email)&&(u.mdp==this.user.mdp))
  {
    this.b=true;
    localStorage.setItem("id",u.id);
    localStorage.setItem("grade",u.grade);
    window.location.replace("home/profile");

  }


}
if(!this.b)
alert("compte non reconnue!");


}

}
