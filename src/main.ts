import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {PreloadAllModules, provideRouter, withDebugTracing, withPreloading} from '@angular/router';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import {AppComponent} from './app/app.component';
import {appRoutes} from './app/app.routes';
import {reducer} from './app/+state';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserAnimationsModule),
        provideRouter(appRoutes,
            withPreloading(PreloadAllModules),
            withDebugTracing()),
        provideAnimations(),

        // setup ngrx
        provideStore(reducer),
        provideEffects(),
        provideStoreDevtools(),

        // importProvidersFrom(AngeboteModule)
    ]
});
