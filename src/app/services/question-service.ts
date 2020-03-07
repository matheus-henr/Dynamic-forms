import { SelectQuestion } from './../types/select-question';
import { QuestionBase } from './../types/question-base';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { InputQuestion } from '../types/Input-question';

@Injectable()
export class QuestionService {

  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new SelectQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 5
      }),

      new InputQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Matheus',
        required: true,
        order: 2
      }),

      new InputQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'Caldeira',
        required: false,
        order: 3
      }),
      new InputQuestion({
        key: 'lastName',
        label: 'Luan viado',
        value: 'Caldeira',
        required: false,
        order: 1
      }),

      new InputQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
