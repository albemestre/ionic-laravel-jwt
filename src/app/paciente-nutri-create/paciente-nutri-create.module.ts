import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PacienteNutriCreatePageRoutingModule } from './paciente-nutri-create-routing.module';
import { PacienteNutriCreatePage } from './paciente-nutri-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteNutriCreatePageRoutingModule
  ],
  declarations: [PacienteNutriCreatePage]
})
export class UserLoginCreatePageModule {}
