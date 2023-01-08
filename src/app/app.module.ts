import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadingComponentComponent } from './uploading-component/uploading-component.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UploadingComponentComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
