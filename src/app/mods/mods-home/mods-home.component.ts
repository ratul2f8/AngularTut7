import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    this.modalOpen = !this.modalOpen;
  }

}
