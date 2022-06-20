import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  
  private static baseURL: string = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) {
  }



  get(path: string, params: any = {}) {
    return this.httpClient.get(ApiService.baseURL + path, {
      
      params
    });
  }

  post(path: string, body: any) {
    return this.httpClient.post(ApiService.baseURL + path, body, {
      
    });
  }

  delete(path: string, body: any = {}) {
    return this.httpClient.delete(ApiService.baseURL + path, {
      
      body
    });
  }
}
