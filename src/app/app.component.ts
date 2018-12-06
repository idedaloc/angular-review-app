import { Component } from '@angular/core';
import { ChangedColorNotificable } from './authors/authors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app -> hello-world';

  post={
    title:"title",
    color: "blue"
  }

  onColorChanged(actualProperties:ChangedColorNotificable){
    console.log("The color's changed", actualProperties)
  }

  tweet = {
    body: '...',
    likesCount: 3,
    isLiked: true
  }
}


