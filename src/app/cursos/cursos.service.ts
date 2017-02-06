import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

	constructor() { }

	getCursos() {
		return [
			{
				id: 0,
				title: 'JavaScript'
			},
			{
				id: 1,
				title: 'PHP'
			},
			{
				id: 2,
				title: 'JAVA'
			},
			{
				id: 3,
				title: 'C'
			}
		];
	}

	getCurso(id: number) {
		let cursos = this.getCursos();
		for (let i=0;i<cursos.length;i++) {
			let curso = cursos[i];
			if(curso.id == id) {
				return curso;
			}
		}
		return null;
	}
}
