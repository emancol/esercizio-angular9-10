import { Component, OnInit, OnChanges } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  counter!: number;
  error!: boolean;

  constructor(private counterService: CounterService) {

  }



  ngOnInit(): void {
    this.counterService.getValueCounter().subscribe((data: number) => {
      this.counter = data;
      this.error = this.counterService.showError;
    })
  }


}
