import { Component, OnInit } from '@angular/core';
import { ICurrency } from './models/currency';
import { AppiCurrenciesService } from './services/api-currencies.service';
// import { currencies as data } from './data/currencies';
import { selectedData } from './data/selectedData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // currencies: ICurrency[] = data;
  selectedData: any[] = selectedData;
  currencies: ICurrency[] = [];

  constructor(private apiCurrencyServices: AppiCurrenciesService) {}

  ngOnInit(): void {
    this.apiCurrencyServices.getAll().subscribe(currencies => {
      this.currencies = currencies;
      // console.log('App');
      // console.log(this.currencies);
    });
  }
}
