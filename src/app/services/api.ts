import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseURL: string = 'https://myexpressapr2026new-production.up.railway.app/api';
  constructor(private http: HttpClient){

  }

  httpGet(path: string){
    let headers = {headers: new HttpHeaders};
    let fullURL: string = this.baseURL + path;
    return new Promise((resolve, reject)=>{
      this.http.get(fullURL, headers).subscribe({
        next: (response: any)=>{resolve(response)},
        error: (error: any) => {reject(error)}
      });
    });
  }
}
