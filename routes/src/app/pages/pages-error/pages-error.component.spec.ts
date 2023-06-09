import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesErrorComponent } from './pages-error.component';

describe('PagesErrorComponent', () => {
  let component: PagesErrorComponent;
  let fixture: ComponentFixture<PagesErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesErrorComponent]
    });
    fixture = TestBed.createComponent(PagesErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
