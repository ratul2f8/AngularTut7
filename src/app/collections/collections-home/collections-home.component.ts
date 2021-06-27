import { Component, OnInit } from '@angular/core';
import { IDataProp, IDataHeader } from '../table/table.component';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  data: IDataProp[] = [
    {
      name: "James",
      age: 24,
      job: "Designer",
    },
    {
      name: "Jill",
      age: 26,
      job: "Engineer"
    },
    {
      name: "Elys",
      age: 25,
      job: "Engineer"
    }
  ];
  headers: IDataHeader[] = [
    {
      key: "name",
      label: "Name"
    },
    {
      key: "age",
      label: "Age"
    },
    {
      key: "job",
      label: "Job"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
