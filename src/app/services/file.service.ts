import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  files: BehaviorSubject<File[]|null> = new BehaviorSubject<File[]|null>(null); 
  constructor() { }

  save(files: File[]): void {
    this.files.next(files);
  }

  clear(): void {
    this.files.next(null);
  }
}
