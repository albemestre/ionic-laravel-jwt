import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentoEditPageRoutingModule } from './alimento-edit-routing.module';

import { AlimentoEditPage } from './alimento-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentoEditPageRoutingModule
  ],
  declarations: [AlimentoEditPage]
})
export class AlimentoEditPageModule {}
