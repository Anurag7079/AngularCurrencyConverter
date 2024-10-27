import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseUrl = 'https://open.er-api.com/v6/latest/'

  constructor(private http: HttpClient) { }

  getExchangeRate(baseCurrency: string, targetCurrency: string): Observable<any> {
    const url = `${this.baseUrl}${baseCurrency}`;
    return this.http.get(url);

  }

}

