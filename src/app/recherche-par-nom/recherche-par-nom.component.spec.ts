import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParNomComponent } from './recherche-par-nom.component';

describe('RechercheParNomComponent', () => {
  let component: RechercheParNomComponent;
  let fixture: ComponentFixture<RechercheParNomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheParNomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
