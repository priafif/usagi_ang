import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  public name: string = 'Ali bin Abu';
  public inputText: string = '';

  btnClick(){
    this.name = this.inputText;
    let result = calculate_area(15, 3);
    alert('The result for area calculation is: ' + result);

    function calculate_area(width: number, height: number){
      let area: number = width * height;
      return area;
    }
  }

}
