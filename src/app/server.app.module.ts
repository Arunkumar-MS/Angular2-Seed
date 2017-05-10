import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node';
import { AppComponent } from './app.component';
import { APP_PROVIDERS } from './app.providers';
import { APP_IMPORTS } from './app.imports';
@NgModule({
    imports: [
      UniversalModule,
      ...APP_IMPORTS
    ],
    providers: APP_PROVIDERS,
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class ServerAppModule {}
