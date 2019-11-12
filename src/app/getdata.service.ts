import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
 
  protected systable : string = ' http://localhost:50035/api/getdata/GetSysTable';
  protected produrl : string = 'http://localhost:50035/api/getdata/getclientdata';
  protected Movetesturl : string = 'http://localhost:50035/api/getdata';
  protected testurl : string = 'http://localhost:50035/api/getdata/GetTestData';
  constructor(private http: HttpClient) { }

  getSysTable() {
    return this.http.get(this.systable);
  }
  getProddata(tblname) {
    var abc= this.http.get(this.produrl+'?tblname='+tblname);
    console.log(abc); 
    return abc;
  }
  gettestdata(tblname) {
    return this.http.get(this.testurl+'?tblname='+tblname);
  }
  Movedatatotest(tblname) {
    return this.http.post(this.Movetesturl+'?tblname='+tblname, null);
  }
}
