import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
  host: {
    /** ТА ЖЕ ЛОГИКА ДЛЯ КОМПОНЕНТОВ! */

    /**
    //  * Статический вариант     

    style: 'color: lime',
    class: 'some-css-class',
    customAtr: 'some-atr-data',
    */
    /** Динамический вариант*/
    '[style.color]': 'inlineStyle',
    '[style.width.%]': '20',
    '[class.some-css-class]': 'true',
    '[custom-atr]': 'customAtr',
    '(document:click)': 'changeColor()',
  },
})
export class CustomDirective {
  @Input() customAtr!: string;

  // @HostListener('document:click') handleClick() {
  //   this.changeColor();
  // }

  inlineStyle: string = 'orange';

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit() {
  //   setInterval(() => {
  //     this.changeColor();
  //   }, 1500);
  // }

  getRandomColor() {
    const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    return randomColor;
  }

  changeColor() {
    this.inlineStyle = this.getRandomColor();
  }
}
