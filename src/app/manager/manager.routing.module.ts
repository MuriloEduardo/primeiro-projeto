import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { ConversasComponent } from './conversas/conversas.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

const managerRoutes: Routes = [
	{path: '', component: PainelComponent},
	{path: 'conversas', component: ConversasComponent},
	{path: 'configuracao', component: ConfiguracaoComponent}
];

@NgModule ({
	imports: [RouterModule.forChild(managerRoutes)],
	exports: [RouterModule]
})

export class ManagerRoutingModule {}
