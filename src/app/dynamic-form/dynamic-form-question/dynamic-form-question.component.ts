import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../../types/question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question: QuestionBase<string>;
  @Input()
  form: FormGroup;

  ngOnInit() {
  }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
