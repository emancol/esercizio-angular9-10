import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;
  public showError: boolean = false;
  private counterSubject = new BehaviorSubject<number>(this.counter);
  public counter$ = this.counterSubject.asObservable();
  constructor() { }

  getValueCounter(): Observable<number> {
    return this.counter$;
  }

  increase(val: number = 1): void {
    this.counter += val;
    console.log(this.counter)
    this.showError = false;
    this.counterSubject.next(this.counter)
  }

  decrease(val: number = 1): void {
    try {
      if (val > this.counter || 0 > (val + this.counter)) {
        throw "ERRORR counter can't be less than 0"
      } else {
        this.counter -= Math.abs(val);
        console.log(this.counter)
        this.showError = false;
        this.counterSubject.next(this.counter)

      }
    } catch (error) {
      this.showError = true;
      console.log(error)
      this.counterSubject.next(this.counter)
    }
  }
}
