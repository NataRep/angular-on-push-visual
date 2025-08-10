import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TimerPipe } from '../../pipes/timer.pipe';
import { BaseComponent } from '../base-check/base-check.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ChildComponent, NgClass, TimerPipe],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent extends BaseComponent {
  timer: number = 0;
  private timerSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }

  ngOnInit() {
    this.startTick()
  }

  startTick() {
    this.timerSubscription = interval(5000).subscribe(() => {
      this.timer += 5;
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}