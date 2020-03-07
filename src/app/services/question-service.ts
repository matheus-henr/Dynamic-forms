import { SelectQuestion } from './../types/select-question';
import { QuestionBase } from './../types/question-base';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { InputQuestion } from '../types/Input-question';

@Injectable()
export class QuestionService {

  getQuestions() {

  const questions: QuestionBase<string>[] = [

      new SelectQuestion({
        key: 'sexo',
        label: 'Sexo',
        options: [
          {key: 'M',  value: 'Masculino'},
          {key: 'F',  value: 'Feminino'},
        ],
        order: 4
      }),
      new SelectQuestion({
        key: 'raca',
        label: 'Raça',
        options: [
          {key: 'branco',  value: 'Branco'},
          {key: 'negro',  value: 'Negro'},
          {key: 'amarelo',  value: 'amarelo'},
        ],
        order: 5
      }),

      new InputQuestion({
        key: 'firstName',
        label: 'Nome',
        value: '',
        order: 1,
        validators: {
          required: true,
          minLength: 2,
          maxLength: 20
        },
      }),

      new InputQuestion({
        key: 'lastName',
        label: 'Sobrenome',
        value: '',
        order: 2,
      }),

      new InputQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3,
        validators: {
          email: true,
          required: true
        },
      })
    ];

  return of(questions.sort((a, b) => a.order - b.order));
  }
}
