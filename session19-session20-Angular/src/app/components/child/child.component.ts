import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() num : any = 10000 
  courseTitle : any = 'node'

    constructor(){
      console.log('constructor')
      console.log("----constructor----" , this.num)
    }

    ngOnInit(){
      console.log('ng On Init');
      console.log("----ng on init----" , this.num)
      
    }
    /// parent send data to child
    ngOnChanges(change:any){
      console.log(change)
      console.log('ng on change');
      if(change.num.currentValue == 20){
        console.log('number = 20')
      }
      
    }
    /// change in any variable in my class
    ngDoCheck(){
      console.log('ng do check');
      if(this.courseTitle == 'Angular'){
        console.log('Angular')
      }
    }
    ngAfterContentInit(){
      console.log('after content init');
      
    }
    ngAfterContentChecked(){
      console.log('after content checked');
      
    }

    ngAfterViewInit(){
      console.log('ng after view init');
      
    }
    ngAfterViewChecked(){
      console.log('ng after view checked');
      
    }
    ngOnDestroy(){
      console.log('ng on destroy')
    }
}
