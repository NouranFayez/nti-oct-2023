import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  inputValue : string = "Angular App"
  model : any =""

  handleInput(eve : any){
    // console.log('typing....')
    console.log(eve.target.value)
    this.inputValue = eve.target.value
  }

  handleInputValue(element : any){
    console.log(element.value)
  }

  handleClick(element : any){
  console.log(element.value)
  }


}
