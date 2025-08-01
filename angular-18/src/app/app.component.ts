import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  title = 'angular-18';

  ngDoCheck(){
    console.log("ngDoCheck app-root")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit app-root")
    setTimeout(()=> this.title = "Lesson ChangeDetectionStrategy", 3000)
  }

  clickHandler(){
    console.log("Click!")
  }
}
