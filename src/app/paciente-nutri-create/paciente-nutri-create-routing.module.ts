import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteNutriCreatePage } from './paciente-nutri-create.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteNutriCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteNutriCreatePageRoutingModule {}
