import { Component } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { ChildActivationEnd } from '@angular/router';
import { DetailCardComponent } from './detail-card/detail-card.component';
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

  getCurrentExpenses($event): void {
    this.currentExpenses = $event;
  }

}
