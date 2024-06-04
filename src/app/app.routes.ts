import { Routes } from '@angular/router';
import { ListCharactersComponent } from './components/marvel/list-characters/list-characters.component';
import { ListBitacoraComponent } from './components/bitacora/list-bitacora/list-bitacora.component';

export const routes: Routes = [
    {
        path: "characters", component: ListCharactersComponent
    },
    {
        path: "bitacora", component: ListBitacoraComponent
    },
    {
        path: "**", redirectTo: "characters"
    }
];
