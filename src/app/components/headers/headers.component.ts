import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnChanges {
  title = 'Конвертер валют';
  selectedCurrencies: ICurrency[] = [];

  @Input() currencies: ICurrency[];
  @Input() selectedData: any[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currencies || changes.selectedData) {
      this.updateSelectedCurrencies();
    }
    if (this.currencies.length > 0 && this.currencies[0].cc !== 'UAH') {
      this.currencies.unshift({
        r030: 1,
        txt: ' Українська гривня',
        rate: 1.0,
        cc: 'UAH',
        exchangedate: this.currencies[5].exchangedate
      });
    }
    // console.log('Headers');
    // console.dir(this.currencies);
    // console.log(this.selectedData);
    // console.dir(this.selectedCurrencies);
  }

  private updateSelectedCurrencies(): void {
    if (this.currencies && this.selectedData) {
      this.selectedCurrencies = this.currencies.filter(currency =>
        this.selectedData.includes(currency.txt)
      );
    }
  }

  // ngOnInit(): void {

  //   this.selectedCurrencies = this.currencies.filter(currency =>
  //     this.selectedData.includes(currency.txt)
  //   );

  //   console.log('Headers');
  //   console.dir(this.currencies);
  //   console.log(this.selectedData);
  //   console.log(this.selectedCurrencies);
  // }
}
