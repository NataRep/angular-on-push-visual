import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }
}