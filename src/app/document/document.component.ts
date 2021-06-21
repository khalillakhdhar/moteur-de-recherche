import { Component, OnInit } from '@angular/core';
import { Document } from '../classes/document';
import { DocumentService } from '../services/document.service';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
document:Document;
documents:Document[];
query:string;
p=1;

  constructor(private documentService:DocumentService) { }

  ngOnInit(): void {
    this.document=new Document();
    this.read();
  }
delete(id)
{
  if(confirm("vous voulez supprimer ce projet?"))
  {
    this.documentService.delete_Document(id);
  }
}
save()
{
  this.document.date=Date();
let doc=Object.assign({},this.document);
this.documentService.create_NewDocument(doc);
alert("ajouté");
this.document=new Document();
}
read()
{
  this.documentService.read_Documents().subscribe(data => {

    this.documents = data.map(e => {
      return {
        id: e.payload.doc.id,

        titre: e.payload.doc.data()["titre"],
        description: e.payload.doc.data()["description"],
        date: e.payload.doc.data()["date"],
        url: e.payload.doc.data()["url"],
       



      };
    });
    console.log(this.documents);
  });


}
}
