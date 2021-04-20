import { TestBed } from '@angular/core/testing';

import { CoisaDetalheGuard } from './coisa-detalhe.guard';

describe('CoisaDetalheGuard', () => {
  let guard: CoisaDetalheGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoisaDetalheGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
