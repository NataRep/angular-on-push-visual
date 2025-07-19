import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss',
})
export class DynamicComponent {
  @Input() name!: string;

  ngOnChanges() {
    console.log('this.name', this.name);
  }
}
