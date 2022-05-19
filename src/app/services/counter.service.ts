import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;
  public showError: boolean = false;
  constructor() { }

  getValueCounter(): number {
    return this.counter;
  }

  increase(val: number = 1): void {
    this.counter += val;
    console.log(this.counter)
    this.showError = false;

  }

  decrease(val: number = 1): void {
    try {
      if (val > this.counter || 0 > (val + this.counter)) {
        throw "ERRORR counter can't be less than 0"

      } else {
        this.counter -= Math.abs(val);
        console.log(this.counter)
        this.showError = false;
      }
    } catch (error) {
      console.log(error)
      this.showError = true;
    }

  }
}
