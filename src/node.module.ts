import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node';
import { AppComponent } from './app/app.component';

@NgModule({
    imports: [UniversalModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class MainModule {}
