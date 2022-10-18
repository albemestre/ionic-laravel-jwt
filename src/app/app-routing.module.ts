import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  /*HOME*/
  { path: '',
    redirectTo: 'user-login', 
    pathMatch: 'full' 
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },


  /*{ path: '',
  redirectTo: 'user-logout', 
  pathMatch: 'full' 
  },
  {
    path: 'user-logout',
    loadChildren: () => import('./user-login/user-logout.module').then( m => m.UserLoginPageModule)
  },*/


  /*CRIAR LOGIN*/
  { path: 'user-create',
  redirectTo: 'user-create'
  },
  {
    path: 'user-create',
    loadChildren: () => import('./user-create/user-create.module').then( m => m.UserLoginCreatePageModule)
  },

    /*FINALIZAR-CADASTRO*/
  { path: 'finalize registration',
  redirectTo: 'paciente-nutri-create'
  },
  {
    path: 'paciente-nutri-create',
    loadChildren: () => import('./paciente-nutri-create/paciente-nutri-create.module').then( m => m.UserLoginCreatePageModule)
  },
  

  /*DIETA*/
  { path: 'dieta-list',
  redirectTo: 'dieta-list',     
  },
  {
    path: 'dieta-list',
    loadChildren: () => import('./dieta-list/dieta-list.module').then( m => m.DietaListPageModule)
  },

  { path: 'dieta-create',
  redirectTo: 'dieta-create',     
  },
  {
    path: 'dieta-create',
    loadChildren: () => import('./dieta-create/dieta-create.module').then( m => m.DietaCreatePageModule)
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
    path: 'alimento-edit/:id',
    loadChildren: () => import('./alimento-edit/alimento-edit.module').then( m => m.AlimentoEditPageModule)
  },
  {
    path: 'alimento-list',
    loadChildren: () => import('./alimento-list/alimento-list.module').then( m => m.AlimentoListPageModule)
  },
  {
    path: 'alimento-detail',
    loadChildren: () => import('./alimento-detail/alimento-detail.module').then( m => m.AlimentoDetailPageModule)
  },
  
  /*{ path: '',
    redirectTo: 'student-list', 
    pathMatch: 'full' },*/
  {
    path: 'student-create',
    loadChildren: () => import('./student-create/student-create.module').then( m => m.StudentCreatePageModule)
  },
  {
    path: 'student-edit/:id',
    loadChildren: () => import('./student-edit/student-edit.module').then( m => m.StudentEditPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'student-detail',
    loadChildren: () => import('./student-detail/student-detail.module').then( m => m.StudentDetailPageModule)
  }, 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
