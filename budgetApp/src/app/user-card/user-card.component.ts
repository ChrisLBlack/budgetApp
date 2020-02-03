import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ICurrentExpense } from '../models/models';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent  {

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.budgetForm = this.formBuilder.group({
      Name: '',
      Total: 0,
      ID: null
    })

  }
  expense: ICurrentExpense;
  currentExpenses: Array<ICurrentExpense> = [];
  budgetForm: any;


  @Output() expenseEvent = new EventEmitter<Array<ICurrentExpense>>();
  @Input() currentExpense;

  emitExpenseArray(): void {
    this.expenseEvent.emit(this.currentExpenses);
  }

  updateTotal(total: number): void {
    this.currentExpense = total;
  }


  addExpense(expense: ICurrentExpense): void {

    let ids: Array<number> = [];
    this.currentExpenses.length ? this.currentExpenses.map(x => ids.push(x.ID)) : null;
    ids.length ? expense.ID = Math.max(...ids) + 1 : expense.ID = 1;
    this.currentExpenses.push(expense);
    this.currentExpense = this.currentExpenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue.Total, 
      0)
    this.budgetForm.reset();

  }

}
