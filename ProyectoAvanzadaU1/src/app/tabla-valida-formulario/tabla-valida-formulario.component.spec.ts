import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaValidaFormularioComponent } from './tabla-valida-formulario.component';

describe('TablaValidaFormularioComponent', () => {
  let component: TablaValidaFormularioComponent;
  let fixture: ComponentFixture<TablaValidaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaValidaFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaValidaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
