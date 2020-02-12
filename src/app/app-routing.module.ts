import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import('./pages/about/about.module').then(n => n.AboutModule)
  },
  {
    path: "contact",
    loadChildren: () => import('./pages/contact/contact.module').then(j => j.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
