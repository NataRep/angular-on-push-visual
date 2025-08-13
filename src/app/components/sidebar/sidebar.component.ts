import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import { BaseComponent } from '../base-check/base-check.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent extends BaseComponent {
  text = "";
  private destroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {
    super();
    this.delayedMarkForCheck()
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }

  delayedMarkForCheck() {
    timer(3000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.text = "Delay markForCheck()"
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}