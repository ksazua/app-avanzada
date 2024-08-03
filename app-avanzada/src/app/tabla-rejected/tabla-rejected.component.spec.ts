import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRejectedComponent } from './tabla-rejected.component';

describe('TablaRejectedComponent', () => {
  let component: TablaRejectedComponent;
  let fixture: ComponentFixture<TablaRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaRejectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
