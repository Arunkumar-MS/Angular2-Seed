import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterActions } from './actions/counterActions';

@NgModule({
    imports: [
      BrowserModule,
      StoreModule.provideStore(rootReducer),
      StoreDevtoolsModule.instrumentOnlyWithExtension({
        maxAge: 10
      })
    ],
    providers: [
      CounterActions
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class BrowserAppModule { }
