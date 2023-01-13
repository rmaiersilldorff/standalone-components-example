import {Component, Inject} from '@angular/core';
import {ReiseService} from '../../journey';
import {MaterialModule} from '../../material.module';
import {AngebotListComponent} from '..';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {ReiseSlice} from '../+state/reducers';
import {loadAngebote} from '../+state/actions';
import {selectAngebote} from '../+state/selectors';

@Component({
    standalone: true,
    imports: [
        MaterialModule,
        AngebotListComponent,
        CommonModule
    ],
    selector: 'app-angebot-page',
    templateUrl: './angebot-page.component.html',
    styleUrls: ['./angebot-page.component.scss']
})
export class AngebotPageComponent {
    angebote$ = this.store.select(selectAngebote);

    constructor(private reiseService: ReiseService,
                @Inject(Store) private store: Store<ReiseSlice>) {
        this.store.dispatch(loadAngebote({
            page: 0
        }));
    }

}
