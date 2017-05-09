import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/node';

@NgModule({
  imports: [
    UniversalModule,
    FormsModule,
    RouterModule
   ],

})
export class MainModule {}
