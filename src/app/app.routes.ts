import {Routes} from '@angular/router';
import {AngebotPageComponent} from './pages/angebot-page/angebot-page.component';
import {WarenkorbPageComponent} from './pages/warenkorb-page/warenkorb-page.component';

export const appRoutes: Routes = [
    {path: 'angebote', component: AngebotPageComponent},
    {
        path: 'suche',
        loadChildren: () => import('./suche.routes').then((m) => m.sucheRoutes)
    },
    {path: 'warenkorb', component: WarenkorbPageComponent},
];
