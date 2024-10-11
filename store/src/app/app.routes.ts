import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component')
    },
    {
        path: 'about',
        loadComponent: () => import('./domains/Info/pages/about/about.component')
    },
    {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component')
    }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./domains/Info/pages/not-found/not-found.component')
    }
];
