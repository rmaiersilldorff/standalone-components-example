import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {BasketService} from '../../basket/basket.service';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
        RouterOutlet,
        RouterLink,
        RouterLink,
    ],
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    basketCount$: Observable<number> = this.basketService.getCount();

    constructor(private breakpointObserver: BreakpointObserver,
                private basketService: BasketService) {
    }

}
