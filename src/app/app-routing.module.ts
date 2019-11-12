import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production/production.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:'', component:ProductionComponent},
  {path:'prod', component:ProductionComponent},
  {path:'test', component:TestComponent},
  {path:'**', component:ProductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductionComponent,TestComponent ]
