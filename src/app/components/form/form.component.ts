import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ICurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() currencies: ICurrency[];
  @Input() inputName: string = '';
  @Input() selectName: string = '';
  @Input() inputCurrentValue: number = 0;

  inputValue: number = 0;
  selectValue: number = 0;

  @Output() inputChanged = new EventEmitter<{ name: string; value: number }>();
  @Output() selectChanged = new EventEmitter<{ name: string; value: number }>();

  onInputChange(): void {
    this.inputChanged.emit({ name: this.inputName, value: this.inputValue });
  }

  onSelectChange(): void {
    this.selectChanged.emit({ name: this.selectName, value: this.selectValue });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Form');
    // console.dir(this.currencies);
  }
}
