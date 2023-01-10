import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private readonly files: BehaviorSubject<File[]|null> = new BehaviorSubject<File[]|null>(null); 
  readonly files$ = this.files.asObservable();
  constructor() {}

  save(files: File[]): void {
    this.files.next(files);
  }

  clear(): void {
    this.files.next(null);
  }
}
