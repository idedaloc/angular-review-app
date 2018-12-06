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

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }
  
    ngOnInit() {
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

