import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { interval, Observable, takeUntil, tap } from 'rxjs';
import { BaseComponent } from '../base-check/base-check.component';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component extends BaseComponent {
  timer = 0;
  timer$: Observable<number> | null = null;
  protected lastNumber = 0;

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }

  startTimer() {
    this.stopTimer();

    this.timer$ = interval(1150).pipe(
      tap(value => {
        this.lastNumber = value;
        this.getCdr().markForCheck();
      }),
      takeUntil(this.destroy$)
    );
  }

  stopTimer() {
    this.destroy$.next();
    this.timer$ = null;
    this.getCdr().markForCheck();
  }

  override ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    super.ngOnDestroy()
  }
}
