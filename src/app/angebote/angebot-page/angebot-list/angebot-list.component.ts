import {Component, Input} from '@angular/core';
import {Reise} from '../../../reise/models/common';
import {CommonModule} from '@angular/common';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ReiseCardComponent} from '../../../reise/reise-card/reise-card.component';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        ReiseCardComponent,
        PerfectScrollbarModule
    ],
    selector: 'app-angebot-list',
    styleUrls: ['./angebot-list.component.scss'],
    template: `
        <div class="reise-container" [perfectScrollbar]="{}">
            <app-reise-card *ngFor="let angebot of angebote; trackBy: trackByFn"
                            [reise]="angebot"
                            class="pb-2">
            </app-reise-card>
        </div>
    `
})
export class AngebotListComponent {

    @Input() angebote: Reise[] = [];

    trackByFn(index: number, item: Reise) {
        return item.id;
    }

}
