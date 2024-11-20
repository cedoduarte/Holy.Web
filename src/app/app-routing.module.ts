import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path:"register",
    loadChildren: ()=> import("./features/auth/auth.module").then(m=> m.AuthModule)
  },
 /*   {
    path:"regsiter",
    loadChildren:()=> import("./features/auth/auth.module").then(m=>m.AuthModule)
  },  */
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "",
    redirectTo: "home", // Redirección inicial
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home/page-not-found" // Ruta para manejar 404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
