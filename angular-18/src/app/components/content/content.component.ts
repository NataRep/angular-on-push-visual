import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { BaseComponent } from '../base-check/base-check.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ChildComponent, NgClass, AsyncPipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent extends BaseComponent {
  timer$ = interval(1000).pipe(map((count) => count += 1));

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }

}