import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: `root`,
})
//Pour communiquer avec le backend
export class ApiService {

  urlRoot: string;

  constructor(private http: HttpClient) {
    this.urlRoot = 'http://localhost:5000';
  }

  //Create Data
  createData(values, apiPath: string): Observable<any> {
    let apiUrl: string;
    apiUrl = this.urlRoot + apiPath;
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    return this.http.post<any>(apiUrl, values, {headers: header})
      .pipe(map(resultats => {
        return resultats;
      }));
  }

  getDataById(id: number, apiPath): Observable<any> {
    let apiUrl: string;
    apiUrl = this.urlRoot + apiPath;
    return this.http.get<any>(apiUrl + id);
  }

  //Read Data
  getData(apiPath: string): Observable<any> {
    let apiUrl: string;
    apiUrl = this.urlRoot + apiPath;
    return this.http.get<any>(apiUrl)
      .pipe(map(resultats => {
        return resultats;
      }));
  }


  //Update Data
  updateData(values, id, apiPath: string): Observable<any> {
    let apiUrl: string;
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    apiUrl = this.urlRoot + apiPath + id;
    return this.http.put<any>(apiUrl, values, {headers: header})
      .pipe(map(resultat => {
        return resultat;
      }));
  }

  //Delete Data
  deleteData(id, apiPath: string): Observable<any> {
    let apiUrl: string;
    apiUrl = this.urlRoot + apiPath + id;
    return this.http.delete(apiUrl)
  }

}
