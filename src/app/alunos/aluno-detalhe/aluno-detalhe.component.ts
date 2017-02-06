import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

	inscricao: Subscription;
	aluno: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private alunosService: AlunosService
	) {}

	ngOnInit() {
		this.inscricao = this.route.params.subscribe(
			(params: any) => {
				let id = params['id'];

				this.aluno = this.alunosService.getAluno(id);

				if(this.aluno == null)
					this.router.navigate(['/nao-encontrado']);
			}
		);
	}

	editarAluno() {
		this.router.navigate(['/alunos', this.aluno.id, 'editar']);
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}
