import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PostAttiviComponent} from "./pages/post-attivi/post-attivi.component";
import {PostNonAttiviComponent} from "./pages/post-non-attivi/post-non-attivi.component";


const routes: Routes = [{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'post-attivi',
    component: PostAttiviComponent
  },
  {
    path:'post-non-attivi',
    component: PostNonAttiviComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
