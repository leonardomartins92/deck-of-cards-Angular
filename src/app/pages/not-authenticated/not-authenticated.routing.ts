import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotAuthenticatedComponent } from "./not-authenticated.component";


const routes: Routes = [
    {path: '', component: NotAuthenticatedComponent},
 
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class NotAuthenticatedRoutingModule{}