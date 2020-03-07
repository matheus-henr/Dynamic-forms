import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './../services/question-controls-service';
import { QuestionBase } from './../types/question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  questions: QuestionBase<string>[] = [];
  form: FormGroup;
  playLoad = '';

  constructor(private questionService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.questionService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.playLoad = JSON.stringify(this.form.getRawValue());
  }

}
