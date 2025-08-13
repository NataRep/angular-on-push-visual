import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../base-check/base-check.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent extends BaseComponent {
  //  @Input() timer: number | null = 0;

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }
}