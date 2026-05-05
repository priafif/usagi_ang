import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { Todo } from './pages/todo/todo';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'calculator',
        component: CalculatorPage
    },
    {
        path: 'todo',
        component: Todo
    }
];
