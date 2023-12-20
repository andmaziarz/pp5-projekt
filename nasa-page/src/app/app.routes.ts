import { Routes } from '@angular/router';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { MoonComponent } from './moon/moon.component';

export const routes: Routes = [
    { path: 'earth', component: EarthComponent},
    { path: 'mars' , component: MarsComponent},
    { path: 'moon' , component: MoonComponent}
];
