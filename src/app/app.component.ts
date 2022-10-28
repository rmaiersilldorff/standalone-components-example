import {Component} from '@angular/core';
import {NavigationComponent} from './reise/navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        NavigationComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'standalone-app';
}
