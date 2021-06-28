import { Component, OnInit, Input } from '@angular/core';

export interface IAccordionItemProp{
  title: string;
  description: string;
}
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  openedItemIndex = 0;
  @Input()
  items: IAccordionItemProp[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
