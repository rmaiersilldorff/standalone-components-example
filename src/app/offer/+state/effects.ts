import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {loadAngebote, loadAngeboteSuccess} from './actions';
import {Reise, JourneyService} from '@journey';

@Injectable({
    providedIn: 'root'
})
export class AngeboteEffects {
    loadAngebote$;

    constructor(
        private actions$: Actions,
        private reiseService: JourneyService) {
        this.loadAngebote$ = createEffect(() => this.actions$.pipe(
            ofType(loadAngebote),
            switchMap(() => this.reiseService.getAngebote()),
            map((angebote: Reise[]) => loadAngeboteSuccess({angebote}))
        ));
    }
}
