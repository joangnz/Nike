import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JordanSvgComponent } from './jordan-svg.component';

describe('JordanSvgComponent', () => {
  let component: JordanSvgComponent;
  let fixture: ComponentFixture<JordanSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JordanSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JordanSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
