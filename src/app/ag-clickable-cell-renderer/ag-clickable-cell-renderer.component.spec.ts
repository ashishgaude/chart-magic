import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgClickableCellRendererComponent } from './ag-clickable-cell-renderer.component';

describe('AgClickableCellRendererComponent', () => {
  let component: AgClickableCellRendererComponent;
  let fixture: ComponentFixture<AgClickableCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgClickableCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgClickableCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
