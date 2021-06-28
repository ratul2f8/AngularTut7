import { Component, OnInit, Input } from '@angular/core';

export interface IStatisticProp{
  numbers: number;
  description: string
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input()
  statistics: IStatisticProp[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
