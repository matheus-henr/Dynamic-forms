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
        value: '',
        order: 2,
        validators: {
          required: true,
          maxLength: 8
        },
      }),

      new InputQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        order: 3,
      }),

      new InputQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4,
        validators: {
          email: true,
        },
      })
    ];

  return of(questions.sort((a, b) => a.order - b.order));
  }
}
