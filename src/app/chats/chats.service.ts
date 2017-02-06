import { Injectable } from '@angular/core';

@Injectable()
export class ChatsService {

	constructor() { }

	getChats() {
		return [
			{
				id: '0asd23ed',
				title: 'Chat Murilo'
			},
			{
				id: 'dasd9a9s8',
				title: 'Chat Maria'
			},
			{
				id: 'ashd6as5dg7',
				title: 'Chat Carlos'
			},
			{
				id: '234sdasd7as',
				title: 'Chat Antonio'
			}
		];
	}

	getChat(id: string) {
		let chats = this.getChats();
		for (let i=0;i<chats.length;i++) {
			let chat = chats[i];
			if(chat.id == id) {
				return chat;
			}
		}
		return null;
	}
}
