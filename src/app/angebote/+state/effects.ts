import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { loadAngebote, loadAngeboteSuccess } from './actions';
import {ReiseService} from '../../reise/reise.service';
import {Reise} from '../../reise/models/common';

@Injectable({
    providedIn: 'root'
})
export class AngeboteEffects {
    loadAngebote$;

    constructor(
        private actions$: Actions,
        private reiseService: ReiseService) {
            this.loadAngebote$ = createEffect(() => this.actions$.pipe(
                ofType(loadAngebote),
                switchMap(() => this.reiseService.getAngebote()),
                map((angebote: Reise[]) => loadAngeboteSuccess({angebote}))
            ));
        }
}
