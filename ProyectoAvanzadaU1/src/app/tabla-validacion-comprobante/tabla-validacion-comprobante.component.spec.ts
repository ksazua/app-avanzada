import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaValidacionComprobanteComponent } from './tabla-validacion-comprobante.component';

describe('TablaValidacionComprobanteComponent', () => {
  let component: TablaValidacionComprobanteComponent;
  let fixture: ComponentFixture<TablaValidacionComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaValidacionComprobanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaValidacionComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
