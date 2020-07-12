import { Component, OnInit } from '@angular/core';
import { DateFilter } from '../date-filter';
import { Download } from '../download';
import { ProbeDataService } from '../probe-data.service';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  downloads: Download[];

  datefilter: DateFilter = {
    start: '2020-07-06 20:00:00',
    end: '2020-07-06 21:00:00'
  };

  constructor(private probeDataService: ProbeDataService) { }

  ngOnInit() {
    this.getProbeData();
  }

  getProbeData(): void {
	  this.probeDataService.getProbeData()
	        .subscribe(downloads => this.addDownloads(downloads));
  }

  addDownloads(addedDownloads: Download[]) {
    console.log("Adding downloads");
    this.downloads = addedDownloads;
  }

}
