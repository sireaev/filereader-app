import { Component, OnInit } from '@angular/core';
import { MyFile } from '../models/my-file.model';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  files: MyFile[] = []
  constructor(private readonly fileService: FileService) { }

  ngOnInit(): void {
    this.subscribeForFiles();
  }

  subscribeForFiles(): void {
    this.fileService.files.subscribe((response: MyFile[]|null) => {
      if (response) {
        this.files = response;
      }
    });
  }

}
