import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, map, Observable, pairwise } from 'rxjs';
import { ChildComponent } from "./components/child/child.component";

export type Timer = {
  prevValue: number,
  currentValue: number,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'angular-18';
  myObservable$!: Observable<Timer>;
  myPromise$!: Promise<unknown>


  ngOnInit() {
    this.myObservable$ = interval(1000).pipe(
      pairwise(), // Преобразует в [prev, current]
      map(([prevValue, currentValue]) => ({ prevValue, currentValue }))
    );

    this.myPromise$ = new Promise((resolve) => {
      setTimeout(() => resolve('Promise успешно выполнен'), 3000)
    }
    )
  }
}
