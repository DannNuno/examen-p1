import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl="https://qapi.vercel.app/api/random";

  constructor(private http: HttpClient) { }

  getQuote(){
    return this.http.get(this.apiUrl);
  }

}
