import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const APP_IMPORTS = [
  StoreModule.provideStore(rootReducer),
  StoreDevtoolsModule.instrumentOnlyWithExtension({
    maxAge: 10
  })
];
