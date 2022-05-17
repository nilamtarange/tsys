import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userProfile'
})
export class UserProfilePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
