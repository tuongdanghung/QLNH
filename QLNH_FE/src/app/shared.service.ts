import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5103/api";
  readonly PhotoUrl = "http://localhost:5103/photos";
  constructor(private http:HttpClient) {}
  layDSThucDon():Observable<any[]>{
   return this.http.get<any>(this.APIUrl+'/ThucDon')   
  }

  themDSThucDon(val:any){
    return this.http.get<any>(this.APIUrl+'/ThucDon', val)   
   }

   suaDSThucDon(val:any){
    return this.http.get<any>(this.APIUrl+'/ThucDon')   
   }

   xoaDSThucDon(val:any){
    return this.http.get<any>(this.APIUrl+'/ThucDon')   
   }
  //  
  layDSMonAn():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MonAn')   
   }
 
   themDSMonAn(val:any){
     return this.http.get<any>(this.APIUrl+'/MonAn', val)   
    }
 
    suaDSMonAn(val:any){
     return this.http.get<any>(this.APIUrl+'/MonAn')   
    }
 
    xoaDSMonAn(val:any){
     return this.http.get<any>(this.APIUrl+'/MonAn')   
    }

    taiAnh(val:any){
      return this.http.get<any>(this.APIUrl+'/MonAn/SaveFile')   
     }

    layDSTenThucDon():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ThucDon/GetAllTenThucDon')   
   }
}
