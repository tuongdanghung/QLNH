import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-ds-t-don',
  templateUrl: './ds-t-don.component.html',
  styleUrls: ['./ds-t-don.component.css']
})
export class DsTDonComponent implements OnInit {

  constructor(private service:SharedService) {}
  DSThucDon:any=[]

  ngOnInit(): void {
    this.taiLaiThucDon()
  }
  taiLaiThucDon(){
    this.service.layDSThucDon().subscribe(data =>{
      this.DSThucDon = data;
      console.log(data);
      
    })
  }
}
