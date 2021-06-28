import { Component, OnInit } from '@angular/core';
import { IItemProp } from '../items/items.component';
import { IStatisticProp } from '../statistics/statistics.component';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss'],
})
export class ViewsHomeComponent implements OnInit {
  statictics: IStatisticProp[] = [
    {
      numbers: 22,
      description: 'Favorites',
    },
    {
      numbers: 967,
      description: 'Page Views',
    },
    {
      numbers: 30,
      description: 'Users',
    },
  ];

  items: IItemProp[] = [
    {
      imageSrc:
        'https://trio.dev/static/d358b933553e621c0c5797f49252c8b2/7fad34d867a32f732b37534ff013e916.jpg',
      header: 'Angular',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have',
      additionalDetails: 'Awesome tool',
    },
    {
      imageSrc: 'https://i.morioh.com/6ee96bb816.png',
      header: 'Angular with RxJS',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have',
      additionalDetails: 'State management redefined',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
