import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICurrentExpense } from '../models/models';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent  {

  constructor() { }
  total: number;
  @Input() expense: ICurrentExpense;
  @Input() currentExpenses: Array<ICurrentExpense>;
  @Output() currentTotal = new EventEmitter<number>();

  remove(expense: ICurrentExpense): void {
    this.currentExpenses.splice(this.currentExpenses.indexOf(expense), 1);
  }

  removeClickEvent(expense: ICurrentExpense) {
    this.remove(expense);
    this.total = this.currentExpenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue.Total, 
      0)
    this.currentTotal.emit(this.total);
  }
}
