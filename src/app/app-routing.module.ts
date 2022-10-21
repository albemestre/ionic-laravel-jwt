import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //HOME
  { path: '',
    redirectTo: 'alimento-list', 
    pathMatch: 'full' 
  },

  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
   

  /*ALIMENTOS*/
  { path: 'alimento-list',
    redirectTo: 'alimento-list',     
  },
  {
    path: 'alimento-create',
    loadChildren: () => import('./alimento-create/alimento-create.module').then( m => m.AlimentoCreatePageModule)
  },
  {
    path: 'alimento-list',
    loadChildren: () => import('./alimento-list/alimento-list.module').then( m => m.AlimentoListPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
