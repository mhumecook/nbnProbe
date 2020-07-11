import { Component, OnInit } from '@angular/core';
import { DateFilter } from '../date-filter';
import { DOWNLOADS } from '../mock-downloads';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  downloads = DOWNLOADS;

  datefilter: DateFilter = {
    start: '2020-07-06 20:00:00',
    end: '2020-07-06 21:00:00'
  };

  constructor() { }

  ngOnInit() {
  }

}
