import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  public reportForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public apiService: Api,
    public router: Router
  ){
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
    })
  }

  private parseApiDate(value: string | Date | null): Date | null {
    if (!value) {
      return null;
    }
    if (value instanceof Date) {
      return value;
    }
    if (typeof value !== 'string') {
      return null;
    }

    // Try ISO format first
    const isoDate = new Date(value);
    if (!isNaN(isoDate.getTime())) {
      return isoDate;
    }

    // Support dd/mm/yyyy or dd-mm-yyyy from the API
    const dmy = /^([0-3]\d)[\/\-]([0-1]\d)[\/\-](\d{4})$/.exec(value);
    if (dmy) {
      const day = Number(dmy[1]);
      const month = Number(dmy[2]) - 1;
      const year = Number(dmy[3]);
      return new Date(year, month, day);
    }

    return null;
  }

  private formatDateToString(value: Date | string | null): string | null {
    if (!value) {
      return null;
    }
    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) {
      return null;
    }
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  async onSubmit(){
    if(this.reportForm.invalid){

    }

    try {
      const rawData: any = this.reportForm.value;
      const reportData: any = {
        ...rawData,
        date: this.formatDateToString(rawData.date) ?? rawData.date
      }

      let res = await this.apiService.httpPost('/reports/add', reportData);
      this.router.navigateByUrl('/reports');
    } catch(error){
      console.log(error);
    }
  }
}
