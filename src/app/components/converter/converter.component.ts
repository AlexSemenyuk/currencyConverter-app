import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  template: `
    <h1>Parent Component</h1>
    <app-my-form
      [(inputValue1)]="parentValue1"
      [(inputValue2)]="parentValue2"
    ></app-my-form>
    <p>Parent Value 1: {{ parentValue1 }}</p>
    <p>Parent Value 2: {{ parentValue2 }}</p>
  `,
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnChanges {
  @Input() currencies: ICurrency[];

  firstInputValue: number = 0;
  secondInputValue: number = 0;
  firstSelectValue: number = 0;
  secondSelectValue: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Converter');
    // console.dir(this.currencies);
  }

  onInputChanged(event: { name: string; value: number }): void {
    if (event.name === 'firstInput') {
      this.firstInputValue = event.value;
      if (this.firstSelectValue !== 0 && this.secondSelectValue !== 0) {
        this.secondInputValue =
          (this.firstInputValue * this.firstSelectValue) /
          this.secondSelectValue;
      } else {
        this.secondInputValue = event.value;
      }
      // console.log('firstInputValue (стало): ', this.firstInputValue);
      // console.log('secondInputValue (стало): ', this.secondInputValue);
    } else if (event.name === 'secondInput') {
      this.secondInputValue = event.value;
      if (this.firstSelectValue !== 0 && this.secondSelectValue !== 0) {
        this.firstInputValue =
          (this.secondInputValue * this.secondSelectValue) /
          this.firstSelectValue;
      } else {
        this.firstInputValue = event.value;
      }
    }
  }

  onSelectChanged(event: { name: string; value: number }): void {
    if (event.name === 'firstSelect') {
      this.firstSelectValue = event.value;
      if (
        this.secondSelectValue !== 0 &&
        this.firstInputValue !== 0 &&
        this.secondInputValue !== 0
      ) {
        this.secondInputValue =
          (this.firstInputValue * this.firstSelectValue) /
          this.secondSelectValue;
      }
      // console.log('firstSelectValue (стало): ', this.firstSelectValue);
      // console.log('secondSelectValue (стало): ', this.secondSelectValue);
    } else if (event.name === 'secondSelect') {
      this.secondSelectValue = event.value;
      if (
        this.firstSelectValue !== 0 &&
        this.firstInputValue !== 0 &&
        this.secondInputValue !== 0
      ) {
        this.firstInputValue =
          (this.secondInputValue * this.secondSelectValue) /
          this.firstSelectValue;
      }
      // console.log('firstSelectValue (стало): ', this.firstSelectValue);
      // console.log('secondSelectValue (стало): ', this.secondSelectValue);
    }
  }

  // ngOnInit(): void {
  //   console.log('Converner');
  //   console.log(this.currencies);
  // }
}
