import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output()
  closeModal = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  //Lifecycle hooks like componentDidMount
  ngOnInit(): void {
    //IMPORTANT: Attach current element directyly to the body for 
    //preventing styling issues with modal(relative directly to the body)
    document.body.appendChild(this.elementRef.nativeElement);
  }
  //Lifecycle hooks like componentWillUnmount
  ngOnDestroy(){
    //document.body.removeChild(this.elementRef.nativeElement);
    //or
    this.elementRef.nativeElement.remove();
  }
  triggerCloseModalAction(){
    this.closeModal.emit();
  }

}
