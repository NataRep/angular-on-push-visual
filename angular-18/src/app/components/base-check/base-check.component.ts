import { ChangeDetectorRef, Directive, DoCheck } from '@angular/core';

@Directive()
export abstract class BaseComponent implements DoCheck {
  isCheck = false;


  protected abstract getCdr(): ChangeDetectorRef;

  ngDoCheck() {
    this.highlightForOneSecond();
  }

  private highlightForOneSecond() {
    this.isCheck = true;

    setTimeout(() => {
      this.isCheck = false;
      this.getCdr().detectChanges(); // тут ухожу в рекурсию, так как detectChanges вызывает ngDoCheck
    }, 1000);
  }

}