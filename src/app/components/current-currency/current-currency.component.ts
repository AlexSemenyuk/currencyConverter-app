import { Component, OnInit, Input } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-current-currency',
  templateUrl: './current-currency.component.html',
  styleUrls: ['./current-currency.component.css']
})
export class CurrentCurrencyComponent implements OnInit {
  @Input() currency: any;
  ngOnInit(): void {
    // console.dir(this.currency);
  }
}
