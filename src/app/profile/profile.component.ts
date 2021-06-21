import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Utilisateur;
  users:Utilisateur[];
  id:string;
  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    this.users=[];
    this.user=new Utilisateur();
this.id=localStorage.getItem("id");
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
      this.verif();
    });
  
  
  }
  verif()
  {
  for(let us of this.users)
  {
  if((us.id==this.id))
  {
    this.user=us;
   
  
  
  }
  
  }
  console.log("currentuser",this.user);
  
  
  }


  update()
  {
    let us=Object.assign({},this.user);
    this.userService.update_User(this.id,us);
    alert("modifié");



  }
}
