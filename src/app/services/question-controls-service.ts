import { QuestionBase } from './../types/question-base';
import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach(question => {
        group[question.key] =  this.configFormControl(question);
    });

    return new FormGroup(group);
  }

  private configFormControl(question: QuestionBase<string>): AbstractControl {
    const control = new FormControl(question.value || '');

    if (typeof question.validators === 'undefined') {
      return control;
    }

    if (!!question.validators.required) {
      control.setValidators(Validators.required);
    }

    if (!!question.validators.email) {
      control.setValidators(Validators.email);
    }

    if (typeof question.validators.max !== 'undefined') {
      control.setValidators(Validators.max(question.validators.max));
    }

    if (typeof question.validators.min !== 'undefined') {
      control.setValidators(Validators.min(question.validators.min));
    }

    if (typeof question.validators.maxLength !== 'undefined') {
      control.setValidators(Validators.maxLength(question.validators.maxLength));
    }

    if (typeof question.validators.minLength !== 'undefined') {
      control.setValidators(Validators.minLength(question.validators.maxLength));
    }

    if (typeof question.validators.pattern !== 'undefined') {
      control.setValidators(Validators.pattern(question.validators.pattern));
    }

    return control;
  }
}
