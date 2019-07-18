import { Component, OnInit ,Input} from '@angular/core';

import{User}from './User';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

@Input() user:User;
  constructor() {

   }

  ngOnInit() {
  }

}