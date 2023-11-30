import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreInternetComponent } from './offre-internet.component';

describe('OffreInternetComponent', () => {
  let component: OffreInternetComponent;
  let fixture: ComponentFixture<OffreInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreInternetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
