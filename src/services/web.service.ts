import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  headers: HttpHeaders;
  options: any
  secret: string = '';

  constructor(private http: HttpClient) {
   }

  
}
