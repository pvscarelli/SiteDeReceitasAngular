import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInformationComponent } from './main-information.component';

describe('MainInformationComponent', () => {
  let component: MainInformationComponent;
  let fixture: ComponentFixture<MainInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
