import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  isColored:boolean;
  @Input() color: string;
  @Output() change = new EventEmitter;

  authors;
  service;

  constructor(service: AuthorsService) { 
    this.service = service;
    this.authors = service.getAuthors();
  }
  
    ngOnInit() {
  }

  loadAuthors(){
    this.authors = this.service.getAuthors();
  }

  trackAuthor(index, author){
    return author ? author.index: undefined;
  }
  onClick(){
    this.isColored = !this.isColored;
    this.color = this.isColored ? "blue" : "red"
    this.change.emit({ currentColor: this.color });
  }

}

export interface ChangedColorNotificable{
  currentColor:string;
}

