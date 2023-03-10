import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  //   getProductsSmall(): Observable<any> {
  //     return this.http.get<any>('assets/products-small.json');
  // }
  // public submitData(data: any): void {
  //     console.log('dataSubmit :', data);
  //   }

  getData(params?: any): Observable<any> {
    if (params) {
      if (!params.name) {
        delete params.name;
      }
      if (!params.department) {
        delete params.department;
      }
      if (!params.status) {
        delete params.status;
      }
      if (!params.account) {
        delete params.account;
      }
      if (!params.code) {
        delete params.code;
      }
    }
    return this.http.get<any[]>(this.REST_API_SERVER, { params: params || [] });
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.REST_API_SERVER, data);
  }
}
