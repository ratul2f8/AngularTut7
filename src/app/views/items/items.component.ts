import { Component, Input, OnInit } from '@angular/core';

export interface IItemProp{
  imageSrc: string;
  header: string;
  description: string;
  additionalDetails: string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input()
  items: IItemProp[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
