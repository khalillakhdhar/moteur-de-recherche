import { Component, OnInit } from '@angular/core';
import { Equipe } from '../classes/equipe';
import { EquipeService } from '../services/equipe.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
equipe:Equipe;
equipes:Equipe[];
public search: any = '';
p: number = 1;
query:string;
selected=false;
  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {
    this.equipe=new Equipe();
    this.read();
  }
  save()
  {
    let eq=Object.assign({},this.equipe);
    this.equipeService.create_NewEquipe(eq);
    alert("ajouté avec succés");
    this.equipe=new Equipe();

  }
  update()
  {
    let eq=Object.assign({},this.equipe);
    this.equipeService.update_Equipe(this.equipe.id,eq);
    alert("modifier avec succés");
this.annuler();
  }
  select(team)
  {
this.equipe=team;
this.selected=true;
  }
  annuler()
  {
this.equipe=new Equipe();
this.selected=false;
  }
  read()
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
  delete(id)
  {
    if(confirm("vous voulez supprimer cet utilisateur?"))
    {
      this.equipeService.delete_Equipe(id);
    }
  }

}
