import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements DoCheck {
  timer = 0;
  isHighlighted = false;
  lastCheck = new Date();
  private timerSubscription!: Subscription;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.startTimer();
  }

  ngDoCheck() {
    this.highlightForOneSecond();
    this.lastCheck = new Date();
  }

  private highlightForOneSecond() {
    // Устанавливаем класс
    this.isHighlighted = true;

    // Через 1 секунду убираем класс
    setTimeout(() => {
      this.isHighlighted = false;
      this.cdr.markForCheck(); // Нужно для OnPush
    }, 1000);
  }

  private startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timer++;
      this.cdr.markForCheck(); // Триггерим проверку изменений
    });
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }
}