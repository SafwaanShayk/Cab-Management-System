import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Billing } from '../_models/billing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getBilling(): Observable<Billing[]> {
    return this.http.get<Billing[]>(this.baseUrl + 'Billing');
  }

  addBilling(addBillingRequest: Billing): Observable<Billing> {
    addBillingRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Billing>(this.baseUrl + 'Billing', addBillingRequest);
  }

  getBillingId(id: string): Observable<Billing> {
    return this.http.get<Billing>(this.baseUrl + 'Billing/' + id);
  }

  updateBilling(
    id: string,
    updateBillingRequest: Billing
  ): Observable<Billing> {
    return this.http.put<Billing>(
      this.baseUrl + 'Billing/' + id,
      updateBillingRequest
    );
  }

  deleteBilling(id: string): Observable<Billing> {
    return this.http.delete<Billing>(this.baseUrl + 'Billing/' + id);
  }
}
