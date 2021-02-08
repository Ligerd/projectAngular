import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



const appRouts: Routes = [
    {path: '', redirectTo: '/shop',pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}