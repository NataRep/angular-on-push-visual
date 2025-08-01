import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

   ngDoCheck(){
    console.log("ngDoCheck app-child")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit app-child")
  }
}
