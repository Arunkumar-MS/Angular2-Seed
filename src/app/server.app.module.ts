import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';

@NgModule({
    imports: [
      UniversalModule,
      StoreModule.provideStore(rootReducer)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class ServerAppModule {}
