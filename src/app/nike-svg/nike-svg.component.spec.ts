import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeSvgComponent } from './nike-svg.component';

describe('NikeSvgComponent', () => {
  let component: NikeSvgComponent;
  let fixture: ComponentFixture<NikeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NikeSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
