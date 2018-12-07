import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-couse-form',
  templateUrl: './new-couse-form.component.html',
  styleUrls: ['./new-couse-form.component.css']
})
export class NewCouseFormComponent implements OnInit {
  categories=[
    {id:1,name:'development'},
    {id:2,name:'testing'},
    {id:3,name:'devops'}  
  ]

  submit(f){
    console.log(f)
  }
  constructor() { }

  ngOnInit() {
  }

}
