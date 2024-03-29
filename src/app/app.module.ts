import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewComponent } from './view/view.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ViewComponent,SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
