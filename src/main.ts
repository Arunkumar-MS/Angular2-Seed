import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServerAppModule } from './app/server.app.module';

platformBrowserDynamic().bootstrapModule(ServerAppModule);
