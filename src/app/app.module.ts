import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './modules/first/first.module';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { GreenComponent } from './shared/components/green/green.component';
import { RedComponent } from './shared/components/red/red.component';
import { YellowComponent } from './shared/components/yellow/yellow.component';
@NgModule({
  declarations: [
    AppComponent,
    CutTextPipe,
    SortDatePipe,
    RedComponent,
    YellowComponent,
    GreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FirstModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
