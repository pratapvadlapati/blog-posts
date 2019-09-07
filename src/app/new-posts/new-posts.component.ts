import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.css']
})
export class NewPostsComponent implements OnInit {

  constructor(private _apiService: ApisService) { }

 form: FormGroup;
  private formSaved_status;
  
   savePost(form){
    // console.log(form.value)
    this._apiService.savePost(form)
    .subscribe((data) => {
      if(data){
        this.formSaved_status = true;
        
      }else{
        this.formSaved_status = false;
      }
      
    }) 
    console.log(this.formSaved_status);
   }

  ngOnInit() {
   
    this.form = new FormGroup({
      title: new FormControl(''),
      post: new FormControl(''),
      author: new FormControl('')

    })

  }

}
