import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-18';

  numberObservable$: Observable<number> = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);
    subscriber.complete();
  })

  ngOnInit() {
    this.numberObservable$.subscribe(console.log);

    console.log('______________________')

    of(1,2,3,4,5).subscribe(console.log);
    from([1,2,3,4,5]).subscribe(console.log);
    fromEvent(document, 'click').subscribe(console.log);
    interval(1000).subscribe(console.log);
  }
}
