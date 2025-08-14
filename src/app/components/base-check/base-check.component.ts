import { ChangeDetectorRef, Directive, DoCheck, OnDestroy } from '@angular/core';
import { Subject, Subscription, takeUntil, tap, timer } from 'rxjs';

@Directive()
export abstract class BaseComponent implements DoCheck, OnDestroy {
  isCheck = false;
  countDoCheck = 0;
  protected destroy$ = new Subject<void>();
  private timerSub?: Subscription;  // Добавляем ссылку на подписку

  protected abstract getCdr(): ChangeDetectorRef;

  ngDoCheck() {
    if (this.countDoCheck % 2 === 0 && !this.isCheck) {
      this.highlightForOneSecond();
    }
    this.countDoCheck++;
  }

  private highlightForOneSecond() {
    this.isCheck = true;

    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }

    this.timerSub = timer(500).pipe(
      tap(() => {
        this.isCheck = false;
      }),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getCdr().detectChanges();
    }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  onClick() {
    console.log(`click ${this.constructor.name}`);
  }
}