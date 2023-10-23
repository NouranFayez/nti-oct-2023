import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  singlePost : any
  posts:any[] = []
  date = new Date()
  constructor(private activated : ActivatedRoute , private global : GlobalService){}
  ngOnInit(){
    // console.log(this.activated.snapshot.paramMap.get('postId'))
    // let postId = this.activated.snapshot.paramMap.get('postId')

    // this.global.getSinglePost(postId).subscribe(res=>{
    //   console.log(res)
    //   this.singlePost = res
    // })

    this.activated.paramMap.subscribe(params=>{
      // console.log(res)
      let postId = params.get('postId')
      this.global.getSinglePost(postId).subscribe(res=>{
          console.log(res)
          this.singlePost = res
        })
    })


    this.global.getPosts().subscribe(res=>{
      this.posts = res
    })
  }

}
