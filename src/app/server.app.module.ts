import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './app/reducers';

@NgModule({
    imports: [
      UniversalModule,
      StoreModule.provideStore(rootReducer)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class ServerAppModule {}
