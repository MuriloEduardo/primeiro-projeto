import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsComponent } from './chats.component';
import { NovoComponent } from './novo/novo.component';
import { ManagerComponent } from './manager/manager.component';

const chatsRoutes: Routes = [
	{path: '', component: ChatsComponent},
	{path: 'novo', component: NovoComponent},
	{path: ':id', component: ManagerComponent}
];

@NgModule ({
	imports: [RouterModule.forChild(chatsRoutes)],
	exports: [RouterModule]
})
export class ChatsRoutingModule {}
