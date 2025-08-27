import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [

    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'country',
        loadChildren: () => import('./country/country.routes') //.then( m => m.countryRoutes ) --> No hace falta por que se exporta por defecto
    },
    {
        path: '**',
        redirectTo: ''
    }



];