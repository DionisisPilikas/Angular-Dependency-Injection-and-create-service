import { TabletsService } from './../tablets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  tablets;
  constructor(service:TabletsService) { 
  this.tablets=service.getTablets();

  }

  ngOnInit(): void {
  }

}
