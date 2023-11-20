import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class AppiCurrenciesService {
  private apiURL =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(this.apiURL);
  }
}
