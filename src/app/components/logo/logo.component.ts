import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from '../base-check/base-check.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent extends BaseComponent {

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  protected getCdr(): ChangeDetectorRef {
    return this.cdr;
  }


}