import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Toolbar } from "./components/toolbar/toolbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatButtonModule, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  calculate_area(width: number, height: number){

  }

  saveData(){
    let age: number = 20;  
  }


}
