import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Services/user.service';

@Pipe({
  name: 'searchuser',
  standalone: true
})
export class SearchuserPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {

    let searchText: string = args[0];
    if (!searchText) {
      return value;
    }
    return value.filter((e: User) => e.name.toLowerCase().includes(searchText.toLowerCase()) || e.email.toLowerCase().includes(searchText.toLowerCase()))
  }

}
