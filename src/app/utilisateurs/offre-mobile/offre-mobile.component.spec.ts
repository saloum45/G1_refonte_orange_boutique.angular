import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreMobileComponent } from './offre-mobile.component';

describe('OffreMobileComponent', () => {
  let component: OffreMobileComponent;
  let fixture: ComponentFixture<OffreMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
