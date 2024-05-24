import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressFormat'
})
export class AddressFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return '';
    }

    
    const addressParts = value.split(',');

    
    if (addressParts.length === 3) {
      return `Street: ${addressParts[0].trim()}, City: ${addressParts[1].trim()}, Country: ${addressParts[2].trim()}`;
    }

    
    return value;
  }

}
