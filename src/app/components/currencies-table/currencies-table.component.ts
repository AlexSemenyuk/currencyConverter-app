import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-currencies-table',
  templateUrl: './currencies-table.component.html',
  styleUrls: ['./currencies-table.component.css']
})
export class CurrenciesTableComponent implements OnChanges {
  @Input() currencies: ICurrency[];

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Table');
    // console.dir(this.currencies);
  }
}
