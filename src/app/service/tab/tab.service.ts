import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xx: string[] = [];
  private yy: number[] = [];

  constructor(@Optional() private LogService: LogService) {}

  getTab(xn: number = 0.1, xr: number = 3.14, h: number = 0.1) {
    let x = xn,
        y = 0.0;

    this.xx = [];
    this.yy = [];

    while (x <= xr) {
      y = Math.log(1+x);
      this.xx.push(x.toFixed(2));
      this.yy.push(y);

      if (this.LogService) {
        this.LogService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }

      x += h;
    }

    return { x: this.xx, y: this.yy };
  }
}
