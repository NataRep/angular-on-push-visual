import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCheckComponent } from './base-check.component';

describe('BaseCheckComponent', () => {
  let component: BaseCheckComponent;
  let fixture: ComponentFixture<BaseCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
