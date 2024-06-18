import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAdoptionComponent } from './pet-adoption.component';

describe('PetAdoptionComponent', () => {
  let component: PetAdoptionComponent;
  let fixture: ComponentFixture<PetAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetAdoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
