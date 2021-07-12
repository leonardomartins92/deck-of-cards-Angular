import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForbidenComponent } from "./forbiden.component";


const routes: Routes = [
    {path: '', component: ForbidenComponent},
 
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ForbidenRoutingModule{}