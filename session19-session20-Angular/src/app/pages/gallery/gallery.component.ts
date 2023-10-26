import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(private global: GlobalService, private activated: ActivatedRoute) {
    this.activated.data.subscribe(data => {
      console.log(data['page'])
      this.pageContent = data['page']
    })
  }
  pageContent = null
  loadingFlag = true
  pageSize = 10
  p = 1
  total = 5000
  gallery: any

  ngOnInit() {
    // this.global.gallery().subscribe(res=>{
    //   this.gallery = res
    //   this.total = res.length
    // },()=>{

    // }, ()=>{
    //   this.loadingFlag = false
    // })

    if (this.pageContent == 'gallery')
      this.galleryData()
    else if (this.pageContent == 'posts')
      this.postsData()

  }
  postsData() {
    this.global.posts().subscribe(res => {
      this.gallery = res
    }, () => {

    }, () => {
      this.loadingFlag = false
    })
  }

  galleryData() {
    this.global.galleryPagination(this.p).subscribe(res => {
      this.gallery = res
      // this.total = res.length
    }, () => {

    }, () => {
      this.loadingFlag = false
    })
  }

  pageChanged(eve: any) {
    this.p = eve
    this.galleryData()
    console.log(eve)
  }
}
