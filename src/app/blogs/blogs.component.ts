import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private _extApi: ApisService) { }

  public Blogs:any

  getBlog(){
    this._extApi.getPost()
    .subscribe((blog)=>{
      if(blog){
      
      this.Blogs = blog;
    //  console.log(this.Blogs)
      }
    })
    
  }

  ngOnInit() {
    this.getBlog()
  }

}
