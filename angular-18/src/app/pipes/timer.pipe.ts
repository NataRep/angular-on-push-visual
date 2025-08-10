import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: true
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null || isNaN(value) || value < 0) {
      return '00:00';
    }

    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);

    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

}
