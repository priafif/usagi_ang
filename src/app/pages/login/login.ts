import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [...SharedModules],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public loginForm: FormGroup;
  public showPassword: boolean = false;
  
  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onShowPassword(){
    this.showPassword = !this.showPassword;
  }

  async onSubmit(){

  }
}
