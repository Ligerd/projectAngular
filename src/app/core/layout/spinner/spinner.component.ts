import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { SpinnerService } from './spinner.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showSpinner = true;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
     this.spinnerService.getSpinnerObserver().subscribe((status) => {
       this.showSpinner = status === 'start';
    });
  }
}
