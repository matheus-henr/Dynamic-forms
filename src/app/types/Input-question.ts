import { QuestionBase } from './question-base';

export class InputQuestion extends QuestionBase<string> {

  controlType = 'input';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
