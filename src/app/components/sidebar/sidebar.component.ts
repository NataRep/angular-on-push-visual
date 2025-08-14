import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { takeUntil, timer } from 'rxjs';
import { BaseComponent } from '../base-check/base-check.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent extends BaseComponent implements OnDestroy {
  text = "";

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

  override ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    super.ngOnDestroy()
  }
}