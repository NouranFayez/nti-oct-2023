import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts : any = []
  constructor(private globalService : GlobalService){
    // this.globalService.getPosts().subscribe(res=>{
    //   console.log(res)
    // })
  }

  ngOnInit(){
    console.log(this.globalService.getPosts())
     this.globalService.getPosts().subscribe(data=>{
      console.log(data)
      this.posts = data
    })
  }

}
