import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

	private alunos: any[]= [
		{id: 1, nome: 'Alunos 01', email: 'alunos01@gmail.com'},
		{id: 2, nome: 'Alunos 02', email: 'alunos02@gmail.com'},
		{id: 3, nome: 'Alunos 03', email: 'alunos03@gmail.com'},
		{id: 4, nome: 'Alunos 04', email: 'alunos04@gmail.com'},
		{id: 5, nome: 'Alunos 05', email: 'alunos05@gmail.com'}
	];

	getAlunos() {
		return this.alunos;
	}

	getAluno(id: number) {
		for (let i=0;i<this.alunos.length;i++) {
			let curso = this.alunos[i];
			if(curso.id == id) {
				return curso;
			}
		}
		return null;
	}

	constructor() { }

}
