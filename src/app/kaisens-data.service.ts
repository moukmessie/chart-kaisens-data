import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KaisensDataService {

  constructor(private http: HttpClient) { }

  getData()
  {
    let url =
      'http://prod.kaisens.fr:811/api/sleep/?deviceid=93debd97-6564-454b-be33-35bd377a2563&startdate=1612310400000&enddate=1614729600000';
      
      return this.http.get(url).toPromise().then((data)=>{
        return data;
      });
       
    }
}
