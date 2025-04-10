import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private LogService: LogService) {}

  getSeries(x: number) {
    let sum: number = 0,   // Початкове значення суми ряду
        term = x,          // Початковий член ряду (x^1 / 1)
        n = 1,             // Лічильник степеня та знаменника
        min = 1e-12,       // Мінімальний поріг точності
        sign = 1;          // Чергування знаку

    do {
        sum += sign * term / n;         // Додаємо член ряду з чергуванням знаку
        n++;                            // Збільшуємо лічильник степеня та знаменника
        term *= x;                      // Отримуємо наступний степінь x^n
        sign = -sign;                   // Чергуємо знак
    } while (Math.abs(term / n) > min); // Виконуємо, поки член ряду не стане малим

    return sum; 
}


  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
      y = 0.0;

    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x.toFixed(2), y);

      if (this.LogService) {
        this.LogService.write(
          'x=' + x.toFixed(2) + ' y=' + y.toFixed(4)
        );
      }

      x = x + h;
    }

    return this.xy;
  }
}
