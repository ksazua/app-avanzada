import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUploadFileComponent } from './tabla-upload-file.component';

describe('TablaUploadFileComponent', () => {
  let component: TablaUploadFileComponent;
  let fixture: ComponentFixture<TablaUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaUploadFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
