import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  titleSection : string  = "about section"
  inputType : string = "password"
  inputDisabled = false
  inputPlaceholder = "Enter Your Password"
  divContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusantium."
  divTag : any = '<p>Angular App</p>'

  getRandomNumber(){
    return Math.random()
  }

  handleClick(){
    console.log('clicking .......')
  }

}
