import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lean Angular Course 2025';
  name: string = 'Название';
  obj: any = { content: 'тут лежит что-то' };

  constructor() {
    console.log(
      '%c PARENT: Constructor',
      'background: #CE93D8; color: #4A148C; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );

    setTimeout(() => (this.title = 'Second attempt'), 3000);

    setTimeout(() => {
      this.obj = { ...this.obj, content: 'тут лежит что-то НОВОЕ' };
    }, 5000);
  }

  ngOnChanges(): void {
    console.log(
      `%c PARENT: ngOnChanges }`,
      'background: #BBDEFB; color: #0D47A1; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngOnInit(): void {
    console.log(
      '%c PARENT: ngOnInit',
      'background: #C8E6C9; color: #1B5E20; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngDoCheck(): void {
    console.log(
      '%c PARENT: ngDoCheck',
      'background: #FFF9C4; color: #F57F17; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngAfterContentInit(): void {
    console.log(
      '%c PARENT: ngAfterContentInit',
      'background: #B3E5FC; color: #01579B; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      '%c PARENT: ngAfterContentChecked',
      'background: #DCEDC8; color: #33691E; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngAfterViewInit(): void {
    console.log(
      '%c PARENT: ngAfterViewInit (Child доступен)',
      'background: #FFCCBC; color: #BF360C; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      '%c PARENT: ngAfterViewChecked',
      'background: #F8BBD0; color: #880E4F; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }

  ngOnDestroy(): void {
    console.log(
      '%c PARENT: ngOnDestroy',
      'background: #CFD8DC; color: #263238; padding: 3px 5px; border-radius: 4px; font-weight: bold'
    );
  }
}
