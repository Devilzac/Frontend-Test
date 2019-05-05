import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetlibrosService {

  constructor(private _http:HttpClient) { }

  findLibros(valor):Observable<any>{
    return this._http.get<any>('https://openlibrary.org/search.json?title='+valor);
  }
  
}
