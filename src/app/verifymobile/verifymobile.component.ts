import { Component, OnInit, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';


@Component({
  selector: 'app-verifymobile',
  templateUrl: './verifymobile.component.html',
  styleUrls: ['./verifymobile.component.css'],
  providers: [ComponentLoaderFactory]
})

//  @NgModule()
export class VerifymobileComponent implements OnInit {
  phone_number:number;
  constructor() { }

  ngOnInit() {
  }

}
