import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';

@NgModule({
    imports: [
      BrowserModule,
      StoreModule.provideStore(rootReducer)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class BrowserAppModule { }
