import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Type } from '../beans/Type'


@Injectable({
    providedIn: 'root'
})
export class TypeService {

  constructor(private http :HttpClient){

  }
  getTypes(): Observable<any>{
      return this.http.get(API_URLS.TYPE_URL);
  }

  addType(type:Type): Observable<any>{
      return this.http.post(API_URLS.TYPE_URL, type);
  }

  getTypeById(id:number): Observable<any>{
    return this.http.get(API_URLS.TYPE_URL+`/${id}`);
}

  updateType(type:Type): Observable<any>{
      return this.http.put(API_URLS.TYPE_URL, type);
  }

  deleteType(id:number): Observable<any>{
      console.log("Ici "+ id);
      return this.http.delete(API_URLS.TYPE_URL +`/${id}`);
  }
}
