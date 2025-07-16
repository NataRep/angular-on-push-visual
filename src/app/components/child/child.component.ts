import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() obj!: any;

  constructor() {
    console.log(
      '%c CHILD: Constructor',
      'background: #E1BEE7; color: #7B1FA2; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #4A148C'
    );
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(
      `%c CHILD: ngOnChanges ${JSON.stringify(changes)}`,
      'background: #E3F2FD; color: #1565C0; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #0D47A1'
    );
  }

  ngOnInit(): void {
    console.log(
      '%c CHILD: ngOnInit',
      'background: #DCEDC8; color: #388E3C; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #1B5E20'
    );
  }

  ngDoCheck(): void {
    console.log(
      '%c CHILD: ngDoCheck',
      'background: #FFF8E1; color: #FFA000; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #F57F17'
    );
  }

  ngAfterContentInit(): void {
    console.log(
      '%c CHILD: ngAfterContentInit',
      'background: #E1F5FE; color: #0277BD; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #01579B'
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      '%c CHILD: ngAfterContentChecked',
      'background: #F1F8E9; color: #689F38; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #33691E'
    );
  }

  ngAfterViewInit(): void {
    console.log(
      '%c CHILD: ngAfterViewInit',
      'background: #FBE9E7; color: #E64A19; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #BF360C'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      '%c CHILD: ngAfterViewChecked',
      'background: #FCE4EC; color: #C2185B; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #880E4F'
    );
  }

  ngOnDestroy(): void {
    console.log(
      '%c CHILD: ngOnDestroy',
      'background: #ECEFF1; color: #455A64; padding: 3px 5px; border-radius: 4px; border-left: 4px solid #263238'
    );
  }
}
