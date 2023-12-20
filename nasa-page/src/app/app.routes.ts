import { Routes } from '@angular/router';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { MoonComponent } from './moon/moon.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'earth', component: EarthComponent},
    { path: 'mars' , component: MarsComponent},
    { path: 'moon' , component: MoonComponent}
];
