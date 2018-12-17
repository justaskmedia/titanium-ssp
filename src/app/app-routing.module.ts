import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SetPasswordComponent } from "./components/set-password/set-password.component";
import { GenerateAPIComponent } from "./components/generate-api/generate-api.component";
import { ThankYouComponent } from "./components/thank-you/thank-you.component";
import { ExpiredComponent } from "./components/expired/expired.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { title: "Welcome" } },
  { path: "set-password", component: SetPasswordComponent, data: { title: "Set Password" } },
  { path: "generate-api", component: GenerateAPIComponent, data: { title: "Generate API" } },
  { path: "thanks", component: ThankYouComponent, data: { title: "Thanks" } },
  { path: "expired", component: ExpiredComponent, data: { title: "Expired" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
