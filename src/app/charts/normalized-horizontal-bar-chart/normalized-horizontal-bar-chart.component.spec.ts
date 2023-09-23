import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizedHorizontalBarChartComponent } from './normalized-horizontal-bar-chart.component';

describe('NormalizedHorizontalBarChartComponent', () => {
  let component: NormalizedHorizontalBarChartComponent;
  let fixture: ComponentFixture<NormalizedHorizontalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalizedHorizontalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalizedHorizontalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
