import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager.routing.module';

import { PainelComponent } from './painel/painel.component';
import { ConversasComponent } from './conversas/conversas.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManagerRoutingModule
  ],
  exports: [],
  declarations: [
    PainelComponent,
    ConversasComponent,
    ConfiguracaoComponent
  ]
})
export class ManagerModule { }
