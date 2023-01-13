import {Routes} from '@angular/router';
import {WarenkorbPageComponent} from '@warenkorb';

export const appRoutes: Routes = [
    {
        path: 'angebote',
        loadChildren: () => import('./angebote/angebote.routes')
          // .then((m) => m.angeboteRoutes)
    },
    {
        path: 'suche',
        loadChildren: () => import('./suche/suche.routes')
         // .then((m) => m.sucheRoutes)
    },
    {path: 'warenkorb', component: WarenkorbPageComponent},
];
