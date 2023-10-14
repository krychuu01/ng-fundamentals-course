import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ISession} from "../../shared/event.model";
import {RESTRICTED_WORDS, restrictedWordsValidator} from "../../shared/restricted-words.validator";

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWordsValidator(RESTRICTED_WORDS)]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })

  }

  saveSession(formValues: FormGroup): void {
    let session: ISession = {
      id: 1,
      name: formValues.value.name,
      duration: formValues.value.duration,
      level: formValues.value.level,
      presenter: formValues.value.presenter,
      abstract: formValues.value.abstract,
      voters: []
    }
    console.log(session);
  }

}


