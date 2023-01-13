import {Component} from '@angular/core';
import {Reise} from '../../journy/models/common';
import {Observable} from 'rxjs';
import {BasketService} from '../basket.service';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
        PerfectScrollbarModule
    ],
    selector: 'app-warenkorb-page',
    templateUrl: './warenkorb-page.component.html',
    styleUrls: ['./warenkorb-page.component.scss']
})
export class WarenkorbPageComponent {

    basket$: Observable<Reise[]>;

    constructor(private basketService: BasketService) {
        this.basket$ = this.basketService.selectAll();
    }
}
