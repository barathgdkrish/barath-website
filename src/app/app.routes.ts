import { Routes } from '@angular/router';
import { Barath101 } from './components/barath101/barath101';
import { BreadnButter } from './components/breadn-butter/breadn-butter';
import { Metamorphosis } from './components/metamorphosis/metamorphosis';

export const routes: Routes = [
  { path: '', component: Barath101 },
  { path: 'professional', component: BreadnButter },
  { path: 'personal', component: Metamorphosis },
  { path: '**', redirectTo: '' }
];
