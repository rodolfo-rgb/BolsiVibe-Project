import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'transactions',
                loadComponent: () => import('./business/transactions/transactions.component')
            },
            {
                path: 'budget',
                loadComponent: () => import('./business/budget/budget.component')
            },
            {
                path: 'finans-edu',
                loadComponent: () => import('./business/finans-edu/finans-edu.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]

    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
