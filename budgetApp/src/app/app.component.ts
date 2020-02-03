import { Component } from '@angular/core';
import { ICurrentExpense } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(){}

  title: string = 'budgetApp';
  currentExpenses: Array<ICurrentExpense>;
  currentExpense: ICurrentExpense;
  currentTotal: number;

  getCurrentExpenses($event): void {
    this.currentExpenses = $event;
  }

  getCurrentTotal($event): void {
    this.currentTotal = $event;
  }
}
