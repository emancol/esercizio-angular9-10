import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {



  constructor(private counterService: CounterService,) {



  }

  ngOnInit(): void {



  }

  add(data: any): void {
    (!data.value) ? this.counterService.increase() : this.counterService.increase(+data.value)
    data.value = '';
  }

  subtrac(data: any): void {
    (!data.value) ? this.counterService.decrease() : this.counterService.decrease(+data.value)
    data.value = '';
  }
}
