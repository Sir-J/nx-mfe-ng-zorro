import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideNzI18n(en_US),
  ],
};
