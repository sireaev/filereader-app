import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingComponentComponent } from './uploading-component.component';

describe('UploadingComponentComponent', () => {
  let component: UploadingComponentComponent;
  let fixture: ComponentFixture<UploadingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
