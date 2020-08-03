import { ReadExcelService } from './../../../read-excel.service';

import { Component, OnInit } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { ConstantPool, compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  archivo : any

  constructor(private map: MapService, private readexcelservice: ReadExcelService) { }

  ngOnInit() {
    this.map.buildMap();
    this.map.setLocationButton();
    this.map.setLocations();
    this.map.setNavigationControl();
    //console.log(this.readexcelservice.get());

    this.readexcelservice.get()
    console.log(this.readexcelservice.data);

  }

}
