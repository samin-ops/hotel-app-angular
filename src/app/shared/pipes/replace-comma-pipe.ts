import { Pipe, PipeTransform } from "@angular/core";

// le pipe personnalise
@Pipe({
name:'replaceComma',

})

export class ReplaceComma implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return value.replace(/./g, ',');
    } else{
      return '';
    }


  }


}
