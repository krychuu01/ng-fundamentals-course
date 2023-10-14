import {Component, OnInit, Inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {TOASTR_TOKEN, Toastr} from "../../events/common/toastr.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  styles: [`
    em {float:right; color: #E05C65; padding-left: 10px;}
    .error input {background: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :-ms-input-placeholder {color: #999}
  `]
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel(): void {
    this.router.navigate(['events'])
  }

  saveProfile(formValues: any) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.toastr.success("Profile saved");
  }

  validateFirstName(): boolean {
    return false;
  }

  validateFirstNameFirstLetterIsNotADigit(firstName: AbstractControl | undefined): boolean {
    if(firstName == null) {
      return true;
    }
    return !/^\d/.test(firstName.value);
  }

}
