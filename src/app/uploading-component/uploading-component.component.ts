import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropZoneFile } from '../models/dropzone-file.model';
import { MyFile } from '../models/my-file.model';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-uploading-component',
  templateUrl: './uploading-component.component.html',
  styleUrls: ['./uploading-component.component.scss']
})
export class UploadingComponentComponent {
  files: MyFile[] = [];
  maxFileSize = 2000000000; // 2GB
  constructor(private readonly fileService: FileService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) {}

  get disableClick() {
    return this.files.length ? true : false;
  }

  /**
   * The file is read from Dropzone event,
   * sliced from index 0 to 500 (splitting some content for the preview, 
   * later we can show it anywhere) as per requirement (fileContent)
   * 
   * @param event Dropzone event
   */
  onSelect(event: DropZoneFile) {
    // Trying to get ReadableStream as Blob and slice blob files while reading
    // after assigining readed stream to fileContent
    // without reading the whole file
    const streamToText = async (blob: ReadableStream) => {
      const readableStream = await blob.getReader();
      const chunk = await readableStream.read();

      return new TextDecoder('utf-8').decode(chunk.value);
    };

    event.addedFiles.map(async(el: any) => {
      const fileSliceBlob = el.slice(0, 500);
      const fileSliceBlobStream = await fileSliceBlob.stream();
      el['fileContent'] = await streamToText(fileSliceBlobStream)
      return el;
    })

    // Trying to read the whole file from memory and slice
    // const fileReader: FileReader = new FileReader();
    // event.addedFiles.map((el: any) => {
    //   fileReader.onloadend = function(x) {
    //     el['fileContent'] = fileReader.result?.slice(0,500);
    //   }
    //   fileReader.readAsText(el);
    // })
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  /**
   * Saves files to SubjectBehavior in FileService and redirects to list route
   */
  upload(): void {
    this.preparseFiles();
    this.fileService.save(this.files);
    this.router.navigate(['../list'], { relativeTo: this.route });
  }
  
  private preparseFiles(): void {
    this.files = this.files.map(el => {
      el.dateTime = new Date().toISOString();
      return el;
    });
  }

}
