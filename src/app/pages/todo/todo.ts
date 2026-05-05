import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { Add } from '../../components/add/add';
import { MatDialog } from '@angular/material/dialog';

interface TodoItem {
  title: string,
  selected: boolean
}

@Component({
  selector: 'app-todo',
  imports: [...SharedModules],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  public todoList: TodoItem[] = [
    { title: 'Wash clothes', selected: false },
    { title: 'Do homework', selected: true },
    { title: 'Buy groceries', selected: false }
  ];

  constructor(public dialog: MatDialog){

  }

  onSelected(index: number){
    this.todoList[index].selected = !this.todoList[index].selected;
  }

  onAdd(){
    const dialogRef = this.dialog.open(Add);
  }

  onClear(){

  }

}
