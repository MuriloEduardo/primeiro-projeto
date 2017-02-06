import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

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

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}

}
