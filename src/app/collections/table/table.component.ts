import { Component, OnInit, Input } from '@angular/core';

export interface IkeyValueFormat {
  [key: string]: string | number;
}
export interface IDataProp extends IkeyValueFormat {
  name: string;
  age: number;
  job: string;
}
export interface IDataHeader {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  classNames: string = '';
  @Input()
  data: Array<IDataProp> = [];

  @Input()
  headers: Array<IDataHeader> = [];
  constructor() {}

  ngOnInit(): void {}
}
