import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CutText',
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, maxLength: number = 100): string {
    return value.length >= maxLength ? value.substring(0, maxLength) + '...' : value;
  }
}
