import {Component, ElementRef, Input, NgZone} from '@angular/core';
import {Reise} from '../models/common';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
    ],
    selector: 'app-reise-card',
    templateUrl: './reise-card.component.html',
    styleUrls: ['./reise-card.component.scss']
})
export class ReiseCardComponent {

    @Input() reise: Reise;

    constructor(private element: ElementRef,
                private zone: NgZone) {
    }

    blink() {
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });

        return null;
    }

}
