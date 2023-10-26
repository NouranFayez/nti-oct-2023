import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-profile-image',
  templateUrl: './update-profile-image.component.html',
  styleUrls: ['./update-profile-image.component.css']
})
export class UpdateProfileImageComponent {
  model={
    userName:''
  }
  constructor(private auth : AuthService){}
  file : any = null
  handleChange(eve:any){
    console.log(eve)
    this.file = eve.target.files[0]
  }

  handleSubmit(){
    let formData = new FormData()
    formData.append('image' , this.file)
    formData.append('userName' , this.model.userName)
    this.auth.updateImage(formData).subscribe(res=>{
      console.log(res)
    })
  }

}
