import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  /*alimentos*/
  { path: '',
    redirectTo: 'alimento-list', 
    pathMatch: 'full' },
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
