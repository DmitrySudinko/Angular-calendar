import { Component, OnInit } from '@angular/core';
import {DateService} from "../shared/date.service";

@Component({
  selector: 'app-organaizer',
  templateUrl: './organaizer.component.html',
  styleUrls: ['./organaizer.component.scss']
})
export class OrganaizerComponent implements OnInit {

  constructor(public dateServise: DateService) { }

  ngOnInit(): void {
  }

}
