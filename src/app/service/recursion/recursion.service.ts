
import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  yy :number = 0;
  private xy = new Map();

  constructor(@Optional() private LogService: LogService) {}
  getRecursion(x: number, term: number, mul: number, n: number, sum: number) {
    // Calculate the next term: x^n/n (where n starts at 2)
    let nextPower = x * term;
    let min = 1e-2;
    
    term = nextPower;
    sum += mul * (term / n);
    mul = -mul;
    n++;
    
    (Math.abs(term / n) > min) ? this.getRecursion(x, term, mul, n, sum) : this.yy = sum;
  }

  getTab(xn: number = 0.1, xr: number = 0.6, h: number = 0.1) {
    let x = xn;

    while (x <= xr) {
      this.getRecursion(x,  x, -1, 2, x);
      this.xy.set(x.toFixed(2), this.yy);

      if (this.LogService) {
        this.LogService.write('x=' + x.toFixed(2) + ' y=' + this.yy.toFixed(4));
      }
      x += h;
    }

    return this.xy;
  }
}
