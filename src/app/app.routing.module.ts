import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsComponent } from './chats/chats.component';

const appRoutes: Routes = [
	{path: '', component: ChatsComponent}
];

@NgModule ({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
