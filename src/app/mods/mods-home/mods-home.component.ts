import { Component, OnInit } from '@angular/core';
import { IAccordionItemProp } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent implements OnInit {
  items: IAccordionItemProp[] = [
    {
      title: 'How to pass data from parent to child component in Angular 9',
      description:
        'To let Angular know that a property in a child component or directive can receive its value from its parent component we must use the @Input() decorator in the said child. The @Input() decorator allows data to be input into the child component from a parent component.',
    },
    {
      title: 'How to detect when an @Input() value changes in Angular?',
      description:
        '@Input() is basically a decorator to bind a property as an input. It is used to pass data i.e property binding from one component to other or we can say, from parent to child component. It is bound with the DOM element. When the DOM element value is changed, Angular automatically updates this property with the changed value. Here we will see how can we use it.',
    },
    {
      title:
        'Update The Child Component And Parent Component Using @Input & @Output In Angular',
      description:
        'I have tried to make this concept as simple as possible. I hope anyone not clear with @Input and @Output decorators of Angular will understand after going through this blog.',
    },
  ];

  modalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
