import {Routes} from '@angular/router';
import {AngebotPageComponent} from './angebot-page/angebot-page.component';
import {provideState} from '@ngrx/store';
import {angeboteFeature} from './+state/reducers';
import {provideEffects} from '@ngrx/effects';
import {AngeboteEffects} from './+state/effects';

export const angeboteRoutes: Routes = [
    {
        path: '', component: AngebotPageComponent, providers: [
            provideState(angeboteFeature),
            provideEffects(AngeboteEffects)
        ],
    }
];
