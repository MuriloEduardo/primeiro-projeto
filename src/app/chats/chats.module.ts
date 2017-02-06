import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats.routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatsComponent } from './chats.component';
import { NovoComponent } from './novo/novo.component';
import { ManagerComponent } from './manager/manager.component';

import { ChatsService } from './chats.service';

@NgModule({
	imports: [
		CommonModule,
		ChatsRoutingModule
	],
	exports: [],
	declarations: [
		SidebarComponent,
		ManagerComponent,
		ChatsComponent,
		NovoComponent
	],
  providers: [
    ChatsService
  ]
})
export class ChatsModule {  }
