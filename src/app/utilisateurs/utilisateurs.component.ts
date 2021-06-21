import { Component, OnInit } from '@angular/core';
import { Equipe } from '../classes/equipe';
import { Utilisateur } from '../classes/utilisateur';
import { EquipeService } from '../services/equipe.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  users:Utilisateur[];
  equipes:Equipe[];

  user:Utilisateur;
  public search: any = '';
p: number = 1;
query:string;
  constructor(private userService:UserService,private equipeService:EquipeService) { }

  ngOnInit(): void {
    this.user=new Utilisateur();
    this.teams();

    this.read();
  }
  save()
  {
    this.user.grade="admin";
    let us=Object.assign({},this.user);
    this.userService.create_NewUser(us);
    alert("ajouté!");


  }
  teams()
  {
    this.equipeService.read_Equipes().subscribe(data => {
  
      this.equipes = data.map(e => {
        return {
          id: e.payload.doc.id,

          titre: e.payload.doc.data()["titre"],
          descirption: e.payload.doc.data()["descirption"],
          domaine: e.payload.doc.data()["domaine"]
         
  
  
  
        };
      });
      console.log(this.equipes);
    });
  
  
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
  delete(id)
  {
    if(confirm("vous voulez supprimer cet utilisateur?"))
    {
      this.userService.delete_User(id);
    }
  }
}
