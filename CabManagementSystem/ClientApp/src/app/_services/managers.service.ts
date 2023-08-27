import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from '../_models/manager';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseUrl + 'Managers');
  }

  addManager(addManagerRequest: Manager): Observable<Manager> {
    //addManagerRequest.Id = '00000000-0000-0000-000000000000';
    return this.http.post<Manager>(
      this.baseUrl + 'Managers',
      addManagerRequest
    );
  }
}
