import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ){

  }

  onSelected(index: number){
    this.todoList[index].selected = !this.todoList[index].selected;
  }

  onDelete(index: number){
    let confirmation = confirm('Are you sure you want to delete this item?');
    if(confirmation){
      this.todoList.splice(index, 1);
    }
  }

  onAdd(){
    const dialogRef = this.dialog.open(Add);
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.todoList.push({ title: result, selected: false });
        this.cdr.detectChanges();
      }
    });
  }

  onClear(){
    let confirmation = confirm('Are you sure you want to clear the todo list?');
    if(confirmation){
      this.todoList = [];
    }
  }

  onEdit(index: number){
    const todoItem = this.todoList[index];
    const dialogRef = this.dialog.open(Add, {
      data: { title: todoItem.title }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.todoList[index].title = result;
        this.cdr.detectChanges();
      }
    });
  }

}
