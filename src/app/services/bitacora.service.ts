import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  constructor(private http: HttpClient) { }

  public getRegistros(): Observable<any>{
    return this.http.get("http://localhost:8080/admin/bitacora",  {
      headers: {"Authorization": "Basic dXNlcjE6dXNlcjFQYXNz"}
    })
  }
}
