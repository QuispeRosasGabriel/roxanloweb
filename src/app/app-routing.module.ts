import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((n) => n.AboutModule),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./pages/gallery/gallery.module").then((b) => b.GalleryModule),
  },
  {
    path: "woman",
    loadChildren: () =>
      import("./pages/gallery/woman/woman.module").then((k) => k.WomanModule),
  },
  {
    path: "baby",
    loadChildren: () =>
      import("./pages/gallery/baby/baby.module").then((p) => p.BabyModule),
  },
  {
    path: "child",
    loadChildren: () =>
      import("./pages/gallery/child/child.module").then((r) => r.ChildModule),
  },
  {
    path: "accesories",
    loadChildren: () =>
      import("./pages/gallery/accesories/accesories.module").then(
        (x) => x.ChildModule
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./pages/contact/contact.module").then((j) => j.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
