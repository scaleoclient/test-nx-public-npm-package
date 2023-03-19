import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  get(): Observable<string> {
    console.log('run api from public lib');

    return of('test');
  }
}
