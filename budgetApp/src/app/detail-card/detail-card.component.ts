import { Component, Input } from '@angular/core';
import { ICurrentExpense } from '../models/models';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent  {

  constructor() { }

  @Input() currentExpense: ICurrentExpense;
  @Input() currentExpenses: Array<ICurrentExpense>;

  remove(expense: ICurrentExpense): void {
    this.currentExpenses.splice(this.currentExpenses.indexOf(expense), 1);
  }


}
