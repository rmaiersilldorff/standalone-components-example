import {Routes} from '@angular/router';
import {AngebotPageComponent} from './offer-page/angebot-page.component';
import {provideState} from '@ngrx/store';
import {angeboteFeature} from './+state/reducers';
import {provideEffects} from '@ngrx/effects';
import {AngeboteEffects} from './+state/effects';

export const offerRoutes: Routes = [
    {
        path: '', component: AngebotPageComponent, providers: [
            provideState(angeboteFeature),
            provideEffects(AngeboteEffects)
        ],
    }
];

export default offerRoutes;
