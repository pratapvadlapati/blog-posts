import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { NewPostsComponent } from './new-posts/new-posts.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'blog', component: BlogsComponent},
  {path:'post', component: NewPostsComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
