import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {
  // constructor() { }
 
  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

}
