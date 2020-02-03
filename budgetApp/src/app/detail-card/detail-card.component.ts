import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Models from '../models/models';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent  {

  constructor() { }
  total: number;
  budgetTotal: number;
  @Input() expense: Models.ICurrentExpense;
  @Input() currentExpenses: Array<Models.ICurrentExpense>;
  @Input() currentBudget: Models.ICurrentBudget;
  @Output() currentTotal = new EventEmitter<number>();

  remove(expense: Models.ICurrentExpense): void {
    this.currentExpenses.splice(this.currentExpenses.indexOf(expense), 1);
  }

  removeClickEvent(expense: Models.ICurrentExpense) {
    this.remove(expense);
    this.total = this.currentExpenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue.Total, 
      0)
    this.currentBudget.Total = this.currentBudget.UserInput - this.total;
    this.currentTotal.emit(this.total);
  }
}
