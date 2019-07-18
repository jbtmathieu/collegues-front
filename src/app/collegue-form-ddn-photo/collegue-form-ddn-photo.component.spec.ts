import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueFormDdnPhotoComponent } from './collegue-form-ddn-photo.component';

describe('CollegueFormDdnPhotoComponent', () => {
  let component: CollegueFormDdnPhotoComponent;
  let fixture: ComponentFixture<CollegueFormDdnPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueFormDdnPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueFormDdnPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
