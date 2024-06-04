import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  public getCharacters() : Observable<any> {
    
    return this.http.get("http://localhost:8080/marvel/api/getCharacters", {
      headers: {"Authorization": "Basic dXNlcjE6dXNlcjFQYXNz"}
    })
  }

  public getCharacterById(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/marvel/api/getCharacters/${id}`,  {
      headers: {"Authorization": "Basic dXNlcjE6dXNlcjFQYXNz"}
    })
  }
}
