import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import APP_ROUTES from './routing/app-routing';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES), provideZoneChangeDetection({ eventCoalescing: true })],
};
