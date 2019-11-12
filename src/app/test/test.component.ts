import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  constructor(private service:GetdataService) { }
  users: any;
  Columns:any[];
  tableData:any[];
  tablename: string;
  options: any[] ;
  show: boolean = false;
  ngOnInit() {
    
  }

  displaytable(data) {this.options = JSON.parse(data);}

  displaydata(data) {this.users = JSON.parse(data);}

  toggle(){
    this.show = !this.show;
    this.service.getSysTable().subscribe((data) => this.displaytable(data));
  }

  getTable(tblname)
  {
    this.toggle();
    this.tablename= tblname;
    this.service.gettestdata(tblname).subscribe((data)=>
    {
      this.displaydata(data);
      var col = [];
      var rows = [];
        for (var i = 0; i < this.users.length; i++) {
            for (var key in this.users[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        var arr =[];
        var y=[]; 
        var tmp = [];
        var arraydata = this.users
        for (var i = 0; i < arraydata.length; i++) {
            tmp = Object.values(arraydata[i]);
          arr.push(tmp);
      }
      this.Columns= col;
        console.log(arr);
        this.tableData = arr;
    });
  }
}
