import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { BaseComponent } from '../base-check/base-check.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent extends BaseComponent {
  timer = 0;
  isHighlighted = false;
  private timerSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  ngOnInit() {
    this.startTimer();
  }

  private startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timer++;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }
}