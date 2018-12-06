import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mirrortitle'
})
export class MirrortitlePipe implements PipeTransform {

  transform(value: string): any {
    
    let splitedTitle = value.split(' ');

    for (let i = 0; i < splitedTitle.length; i++) {
      let wordToChange = splitedTitle[i];
      splitedTitle[i] = this.isPreposition(wordToChange) && i > 0 ? wordToChange.toLowerCase() 
                                              : this.handleWord(wordToChange);
    }

      return splitedTitle.join(' ');
  }

  isPreposition(word: string):boolean{

    let preposition = ['the', 'of'];
    return preposition.includes(word.toLowerCase());

  }

  handleWord(word: string):string{
  
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }


}
