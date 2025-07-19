import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { ChildComponent } from './components/child/child.component';
@NgModule({
  declarations: [AppComponent, CutTextPipe, SortDatePipe, ChildComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
