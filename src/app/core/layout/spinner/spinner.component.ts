import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() httploading: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChange) {
    console.log(changes); //logging the changes in @Input()
  }
}
