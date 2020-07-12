import { Injectable } from '@angular/core';
import { Download } from './download';
import { DOWNLOADS } from './mock-downloads';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProbeDataService {

  constructor(private messageService: MessageService) { }

  getProbeData(): Observable<Download[]> {
	this.messageService.add('ProbeDataService: fitched data');
    return of(DOWNLOADS);
  }
}
