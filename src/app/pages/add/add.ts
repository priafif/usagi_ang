import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';

@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {}
