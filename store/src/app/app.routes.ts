import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component';
import { AboutComponent } from './domains/Info/pages/about/about.component';
import { NotFoundComponent } from './domains/Info/pages/not-found/not-found.component';
export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
