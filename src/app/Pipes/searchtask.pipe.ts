import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtask',
  standalone: true
})
export class SearchtaskPipe implements PipeTransform {

  
  transform(value: any, searchText: any): any {
    if (!searchText) {
      return value;
    }
    return value.filter((e: any) => e.title.toLowerCase().includes(searchText.toLowerCase()) || e.description.toLowerCase().includes(searchText.toLowerCase()))
  }

}
