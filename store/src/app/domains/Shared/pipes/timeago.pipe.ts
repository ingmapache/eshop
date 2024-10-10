import { input, Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    
    const dateCreated = new Date(value);
    const actualDate = new Date();

    return 'Added ' + formatDistance(actualDate, dateCreated) + ' ago.';
  }

}
