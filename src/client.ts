import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.browser';
import { platformUniversalDynamic } from 'angular2-universal/browser';
import { bootloader } from '@angularclass/bootloader';
import { MainModule } from './browser.module';

export const platformRef = platformUniversalDynamic();

export function main() {
  return platformRef.bootstrapModule(MainModule);
}

bootloader(main);
