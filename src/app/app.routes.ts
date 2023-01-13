import {Routes} from '@angular/router';
import {WarenkorbPageComponent} from './basket';

export const appRoutes: Routes = [
    {
        path: 'angebote',
        loadChildren: () => import('./offers/angebote.routes')
          // .then((m) => m.angeboteRoutes)
    },
    {
        path: 'suche',
        loadChildren: () => import('./search/suche.routes')
         // .then((m) => m.sucheRoutes)
    },
    {path: 'warenkorb', component: WarenkorbPageComponent},
];
