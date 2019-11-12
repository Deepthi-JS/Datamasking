import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.sass']
})
export class ProductionComponent implements OnInit {

  constructor(private service:GetdataService) { }

  users: any;
  show:boolean = false;
  options: any[] ;
  Columns:any[];
  tableData:any[];
  tablename: string;
  successmessage: any = "Data Moving to Test Environment";
  success: boolean;

  movedata:boolean;

  ngOnInit() {
   
  }

  displaytable(data) {this.options = JSON.parse(data);}

  displaydata(data) {this.users = JSON.parse(data);}
 

  Movedata()
  {
    this.success = true;
    if(this.tablename != null){
      this.service.Movedatatotest(this.tablename).subscribe((data)=>{
        this.successmessage = data;
        setTimeout(()=>{

          this.success = false;
        },2000)
        this.movedata = false;
      });
    }
    
  }
  toggle(){
    this.show = !this.show;
    this.service.getSysTable().subscribe((data) => this.displaytable(data));
  }

  getTable(tblname)
  {
    this.movedata = true;
    this.toggle();
    this.tablename= tblname;
    this.service.getProddata(tblname).subscribe((data)=>
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
