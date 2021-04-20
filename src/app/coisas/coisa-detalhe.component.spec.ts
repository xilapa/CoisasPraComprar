import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoisaDetalheComponent } from './coisa-detalhe.component';

describe('CoisaDetalheComponent', () => {
  let component: CoisaDetalheComponent;
  let fixture: ComponentFixture<CoisaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoisaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoisaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
