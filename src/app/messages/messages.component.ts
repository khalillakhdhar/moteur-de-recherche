import { Component, OnInit } from '@angular/core';
import { Message } from '../classes/message';
import { Utilisateur } from '../classes/utilisateur';
import { MessagesService } from '../services/messages.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  pseudo:string;
  messages:Message[];
  message:Message;
  user:Utilisateur;
  users:Utilisateur[];
  id:string;
  constructor(private messagesServices:MessagesService,private userService:UserService) { }

  ngOnInit(): void {
    this.message=new Message();
    this.id=localStorage.getItem("id");
    this.current();
    this.read();
  }
  send()
  {
    this.message.date=Date();
    this.message.pseudo=this.user.nom;
    let msg=Object.assign({},this.message);
    this.messagesServices.create_NewUser(msg);
    this.message=new Message();
  }
  current()
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
   
  this.pseudo=us.nom;
  
  }
  
  }
  console.log("currentuser",this.user);
  
  
  }
  read()
  {
    this.messagesServices.read_Users().subscribe(data => {
      this.messages = data.map(e => {
       
        return {
         id: e.payload.doc.id,

         text: e.payload.doc.data()["text"],
         pseudo: e.payload.doc.data()["pseudo"],
         date: e.payload.doc.data()["date"],
         




        };
      }
      );
      console.log(this.messages);
  

    });
  }
}
