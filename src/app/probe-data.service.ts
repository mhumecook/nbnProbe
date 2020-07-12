import { Injectable } from '@angular/core';
import { Download } from './download';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProbeDataService {

  private probeDataUrl = 'http://localhost:3030/api/performance';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getProbeData(): Observable<Download[]> {
	this.log('fetched data');
    return this.http.get<Download[]>(this.probeDataUrl);
  }

  /** Log a ProbeDataService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProbeDataService: ${message}`);
  }
}
