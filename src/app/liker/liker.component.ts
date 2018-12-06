import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'liker',
  templateUrl: './liker.component.html',
  styleUrls: ['./liker.component.css']
})
export class LikerComponent{
  @Input('likeCount') likeCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    this.isActive = !this.isActive;
    this.likeCount += this.isActive ? 1 : -1;
    
  }

}
