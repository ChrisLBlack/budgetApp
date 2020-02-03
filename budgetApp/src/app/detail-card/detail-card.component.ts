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


}
