import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleguesAfficherComponent } from './collegues-afficher.component';

describe('ColleguesAfficherComponent', () => {
  let component: ColleguesAfficherComponent;
  let fixture: ComponentFixture<ColleguesAfficherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleguesAfficherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleguesAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
