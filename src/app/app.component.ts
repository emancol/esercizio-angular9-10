import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterProject';

  constructor() { }

  ngOnInit() { }



}
