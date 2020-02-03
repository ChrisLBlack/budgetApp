import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as Models from '../models/models';

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
      ID: null,
      Summary: ''
    });

  }

  ngOnInit() {
  }

  @Output() expenseEvent = new EventEmitter<Array<Models.ICurrentExpense>>();
  @Output() budgetEvent = new EventEmitter<Models.ICurrentBudget>();
  @Input() currentExpense;

  expense: Models.ICurrentExpense;
  currentExpenses: Array<Models.ICurrentExpense> = [];
  budgetForm: any;
  currentBudget: Models.ICurrentBudget = {UserInput: 1000, Total: 1000};


  emitExpenseArray(): void {
    this.expenseEvent.emit(this.currentExpenses);
    this.budgetEvent.emit(this.currentBudget);
  }

  updateTotal(total: number): void {
    this.currentExpense = total;
  }


  addExpense(expense: Models.ICurrentExpense): void {

    let ids: Array<number> = [];
    this.currentExpenses.length ? this.currentExpenses.map(x => ids.push(x.ID)) : null;
    ids.length ? expense.ID = Math.max(...ids) + 1 : expense.ID = 1;
    this.currentExpenses.push(expense);
    this.currentExpense = this.currentExpenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue.Total, 
      0)
    this.currentBudget.Total = this.currentBudget.UserInput - this.currentExpense;
    this.budgetForm.reset();
  }

}
