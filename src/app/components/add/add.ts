import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  public todoForm: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Add>
  ){
    this.todoForm = this.formBuilder.group({
      title: ''
    });
  }

  onSubmit(){

  }
  onCancel(){
    this.dialogRef.close();
  }
}
