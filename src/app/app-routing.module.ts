import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponetComponent } from './contact-componet/contact-componet.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path:'home',component: HomeComponentComponent},
  {path:'contact',component: ContactComponetComponent},
  {path:'service',component: ServiceComponentComponent},
  {path:'about',component: AboutComponentComponent},
  {path:'**',component:HomeComponentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }