import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueModifierComponent } from './collegue-modifier.component';

describe('CollegueModifierComponent', () => {
  let component: CollegueModifierComponent;
  let fixture: ComponentFixture<CollegueModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
