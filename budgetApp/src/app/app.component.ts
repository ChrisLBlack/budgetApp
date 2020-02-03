import { Component } from '@angular/core';
import * as Models from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(){}

  title: string = 'budgetApp';
  currentExpenses: Array<Models.ICurrentExpense>;
  currentExpense: Models.ICurrentExpense;
  currentTotal: number;
  currentBudget: Models.ICurrentBudget;

  getCurrentExpenses($event): void {
    this.currentExpenses = $event;
  }

  getCurrentBudget($event): void {
    this.currentBudget = $event;
  }

  getCurrentTotal($event): void {
    this.currentTotal = $event;
  }
}
