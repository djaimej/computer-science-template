import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout').then(c => c.Layout),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/general/general').then((c) => c.General),
            },
            {
                path: ':semester/:subject/:file',
                loadComponent: () => import('./pages/subtopic/subtopic').then((c) => c.Subtopic),
            },
        ],
    }
];
