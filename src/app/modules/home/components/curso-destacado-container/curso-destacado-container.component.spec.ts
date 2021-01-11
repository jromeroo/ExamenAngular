import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDestacadoContainerComponent } from './curso-destacado-container.component';

describe('CursoDestacadoContainerComponent', () => {
  let component: CursoDestacadoContainerComponent;
  let fixture: ComponentFixture<CursoDestacadoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDestacadoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDestacadoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
