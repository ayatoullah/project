import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-verifymobile',
  templateUrl: './verifymobile.component.html',
  styleUrls: ['./verifymobile.component.css']
})
export class VerifymobileComponent implements OnInit {

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.ngxSmartModalService.getModal('myModal').open();
  }

}
