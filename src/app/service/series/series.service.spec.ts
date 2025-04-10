import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Обчислення за допомогою рекурсії значень x=0.1 y≈0.0953', () => {
    const x = 0.1;
    const expectedY = 0.0953;
  
    const xy = service.getTab(); // Повертає Map<string, number>
    const y1 = xy.get(x.toFixed(2));
  
    expect(y1).toBeDefined();
    if (y1 !== undefined) {
      expect(y1.toFixed(4)).toBe(expectedY.toFixed(4));
    }
  });
  
});
