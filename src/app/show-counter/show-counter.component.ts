import { Component, OnInit, OnChanges } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  num: number;
  error!: boolean;

  constructor(private counter: CounterService) {

    this.num = this.counter.getValueCounter()
    setInterval(() => {
      this.num = this.counter.getValueCounter()
      this.error = this.counter.showError;
    })

  }



  ngOnInit(): void { }


}
