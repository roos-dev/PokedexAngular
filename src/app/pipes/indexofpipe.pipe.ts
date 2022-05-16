import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexofpipe',
})
export class IndexofpipePipe implements PipeTransform {
  transform(items: any[], item: any): any {
    return items.indexOf(item);
  }
}
