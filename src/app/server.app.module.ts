import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
      UniversalModule,
      StoreModule.provideStore(rootReducer),
      StoreDevtoolsModule.instrumentOnlyWithExtension({
        maxAge: 10
      })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class ServerAppModule {}
