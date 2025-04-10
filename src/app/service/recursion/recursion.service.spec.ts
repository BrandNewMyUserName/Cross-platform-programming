import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Табулювання значення x=0.1 y≈0.0953', () => {
    const x = 0.1;
    const expectedY = 0.0953;

    const result = service.getTab(0.1, 0.1, 0.1); // одна точка: x = 0.1
    const y = result.get(x.toFixed(2));

    expect(y).toBeDefined();
    if (y !== undefined) {
      expect(y).toBeCloseTo(expectedY, 2); // Точність до 2 знаків після коми
    }
  });

  it('Рекурсивна функція не змінює результат, якщо LogService не задано', () => {
    const serviceWithoutLog = new RecursionService(null as any);
    const result = serviceWithoutLog.getTab(0.1, 0.1, 0.1);
    const y = result.get('0.10');

    expect(y).toBeDefined();
    expect(typeof y).toBe('number');
  });
});
