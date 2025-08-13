import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../base-check/base-check.component';
import { Child2Component } from '../child-2/child-2.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ChildComponent, NgClass, AsyncPipe, Child2Component],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent extends BaseComponent {
  count: number = 0;

  incrementCount() {
    this.count += 1;
  }

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }

}