import { ChangeDetectorRef, Directive, DoCheck } from '@angular/core';

@Directive()
export abstract class BaseComponent implements DoCheck {
  isCheck = false;
  countDoCheck = 0;

  protected abstract getCdr(): ChangeDetectorRef;

  ngDoCheck() {
    if (this.countDoCheck % 2 === 0 && !this.isCheck) {
      this.highlightForOneSecond();
      console.log(`ngDoCheck: ${this.constructor.name}`)
    }

    this.countDoCheck++;
  }

  private highlightForOneSecond() {
    this.isCheck = true;

    setTimeout(() => {
      this.isCheck = false;
      this.getCdr().detectChanges();
    }, 1000);
  }

}