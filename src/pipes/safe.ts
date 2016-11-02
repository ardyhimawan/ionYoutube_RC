import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/*
  Generated class for the Safe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'safe'
})
@Injectable()
export class Safe {
  /*
    Takes a value and makes it lowercase.
   */
   constructor(protected _sanitizer: DomSanitizer){

   }

  public transform(value: string, type: string) {
    switch(type){
      case 'resourceUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/'+value);
      default:
        throw new Error('unable to bypass security for invalid type: $(type)');
    }
  }
}
