import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UploadingComponent } from './uploading-component/uploading-component.component';

const routes: Routes = [{
  path: '', component: AppComponent, children: [
    { path: '', redirectTo: 'uploading', pathMatch: 'full'},
    { path: 'uploading', component: UploadingComponent },
    { path: 'list', component: ListComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
