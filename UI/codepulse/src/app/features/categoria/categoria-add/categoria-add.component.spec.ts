import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAddComponent } from './categoria-add.component';

describe('CategoriaAddComponent', () => {
  let component: CategoriaAddComponent;
  let fixture: ComponentFixture<CategoriaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaAddComponent]
    });
    fixture = TestBed.createComponent(CategoriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
