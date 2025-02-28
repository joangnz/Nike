import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverseSvgComponent } from './converse-svg.component';

describe('ConverseSvgComponent', () => {
  let component: ConverseSvgComponent;
  let fixture: ComponentFixture<ConverseSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverseSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverseSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
