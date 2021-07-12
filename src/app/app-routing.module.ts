import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  
  {
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'cards', 
    loadChildren: () => import('./pages/cards/cards.module').then(m=>m.CardsModule)
  },
  {
    path: 'game', 
    loadChildren: () => import('./pages/game/game.module').then(m=>m.GameModule)
  },
  {
    path: 'not-authenticated', 
    loadChildren: () => import('./pages/not-authenticated/not-authenticated.module').then(m=>m.NotAuthenticatedModule)
  },
  {
    path: 'forbiden', 
    canActivate: [AppGuard],
    loadChildren: () => import('./pages/forbiden/forbiden.module').then(m=>m.ForbidenModule)
  },
  { path: '**',
   component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
