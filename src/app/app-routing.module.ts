import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [];
routes.push({ path: '', redirectTo: 'home', pathMatch: 'full' });

routes.push({ path: 'home', component: HomeComponent });


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
