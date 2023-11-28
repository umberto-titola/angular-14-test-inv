import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeResolver } from './home/home.resolver';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { DettaglioResolver } from './dettaglio/dettaglio.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    resolve:{data:HomeResolver}
  },
  {
    path: 'dettaglio/:id',
    component: DettaglioComponent,
    resolve:{data:DettaglioResolver}
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
  providers:[HomeResolver,DettaglioResolver]
})
export class AppRoutingModule {}
