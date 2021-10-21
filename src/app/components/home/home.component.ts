import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../../services/fetch-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ser: FetchServiceService) { 
    this.ser.getlocation();
  }

  ngOnInit(): void {
  }

}
