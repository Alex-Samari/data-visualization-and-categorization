import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Worker } from 'src/app/models/worker.model';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}

  getWorkerById = (workerId: any): Observable<any> => {
    return this.http.get(`${environment.apiUrl}/workers/${workerId}`).pipe(
      map((data: any) => new Worker().deserialize(data.worker)),
      catchError(() => throwError('User not found'))
    ) as Observable<any>;
  };
}
