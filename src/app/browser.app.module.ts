import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './app.providers';
import { APP_IMPORTS } from './app.imports';

@NgModule({
    imports: [
      BrowserModule,
      ...APP_IMPORTS
    ],
    providers: APP_PROVIDERS,
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class BrowserAppModule { }
