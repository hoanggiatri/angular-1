import { Component } from '@angular/core';
import * as data from '../../data/province/data.json';

var mydata = JSON.stringify(data);
var province = JSON.parse(mydata);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent {
  public name = 'Hoàng Gia Trí';
  public vietnam : any[] = [];
  public districts: any[] = [];
  public age = 20;
  public list = [
    { ten: 'Yi', gia: 450, haGia:true },
    { ten: 'Jax', gia: 3150, haGia:true },
    { ten: 'Jarvan', gia: 4800, haGia:false },
  ];
  constructor() {}

  ngOnInit(): void {
    let t = province
    this.vietnam = Object.keys(t).map(function(personNamedIndex){
      let person = t[personNamedIndex];
      return person;
  });
  }
  public resetName(): void {
    
  }

  public changeCity(event:any): void{
    const city = event.target.value;
    if (!city) {
      return;
    }
    // cách 1
    const search = this.vietnam.filter((data) => data.Name === city);
    // console.log('search', search);
    if (search && search.length > 0) {
    this.districts = search[0].Districts;
    }
  }

  public changeDistrict(event:any): void{
    const district = event.target.value;
    if (!district) {
      return;
    }

  }
}
